import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useReducer } from "react";

import "./Asset/Style/Style.scss"

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import PageNotFound from "./Components/Error404";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout";
import Profile from "./Components/Profile";
import ContactUs from "./Components/ContactUs";


import { initialState, reducer } from './reducer/Reducer';

export const UserContext = createContext();


const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/contact-us" element={<ContactUs />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  const [loginLogout, setLoginLogout] = useReducer(reducer, initialState);

  const handleVerification = async () => {
    try {
      const res = await fetch('/auth', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include"
      });
      const result = await res.json();

      if (result.status) {
        setLoginLogout({ type: "USER", payload: true });
      } else {
        setLoginLogout({ type: "USER", payload: false });
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleVerification();
  }, []);


  return (
    <>
        <UserContext.Provider value={{ loginLogout ,setLoginLogout }}>
          <Navigation />
          <Routing />
        </UserContext.Provider>
      <Footer />
    </>

  );
}

export default App;
