import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


// animation should be also be in the last

function Login() {
    document.title = "Login";

    const {setLoginLogout, setCartLength} = useContext(UserContext);

    const [loginStatus, setLoginStatus] = useState({
        status: "",
        message: ""
    });

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    

    const navigate = useNavigate();

    const handleCartLength = async () => {
        try {
          const res = await fetch('/cart/get', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include"
          });
          const result = await res.json();
    
          if (result.status) {
            setCartLength({ type: "CART", length: result.cartLength});
          } else {
            setCartLength({ type: "CART", length: null});
          }
        } catch (error) {
          console.log(error);
        }
      }


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
                navigate('/profile')
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleVerification();
    }, []);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleUserLogin = async (e) => {
        setLoginStatus({status: "", message: ""});
        e.preventDefault(e);

        const res = await fetch('/auth/sign-in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const result = await res.json();

        if (result.status) {
            setLoginLogout({ type: "USER", payload: true });
            setLoginStatus({ status: true, message: result.message })
            setTimeout(() => {
                navigate('/profile');
            }, 1000);
            handleCartLength();
        } else {
            setLoginLogout({ type: "USER", payload: false });
            setLoginStatus({ status: false, message: result.message });
            setUser({ ...user, password: "" });
        }
    }

    return (
        <div className='container mt-4 p-5'>
            <form method="post" className='form-login p-5 '>
                <div className="row d-flex justify-content-center">
                    <div className={`col-sm-12 col-md-4 col-lg-3 col-xl-2 text-center active`}>
                        <Link to={"/login"} className='btn'>Login</Link>
                    </div>
                    <div className={`col-sm-12 col-md-4 col-lg-3 col-xl-2 text-center not-active`}>
                        <Link to={"/signup"} className='btn'>Signup</Link>
                    </div>
                </div>
                <div className="row m-3">
                    <p className="text-center m-0 ">Connect With Social Account: </p>
                </div>
                <div className="row  m-3">
                    <p className="text-center login-social-link m-0">
                        <i className="fab fa-facebook-f ms-4 cursor-pointer"></i>
                        <i className="fab fa-google ms-4"></i>
                        <i className="fab fa-twitter ms-4"></i>
                        <i className="fab fa-github ms-4"></i>
                    </p>
                </div>
                <div className="row m-3">
                    <p className="text-center m-0">Or:</p>
                </div>
                {typeof (loginStatus.status) === "boolean" &&
                    <div className="row m-3">
                        <p className={`text-center ${loginStatus.status === true ? 'text-success' : 'text-danger'} m-0`}>{`${loginStatus.status === true ? 'Login Successful!...' : 'Invalid User!...'}`}</p>
                    </div>
                }
                <div className="row d-flex justify-content-center ">
                    <div className="col-sm-12 col-md-8 col-lg-6 col-xl-4 p-0">
                        <input type="email" onChange={handleInputs} name="email" id="email" placeholder='Enter Email' />
                        <input type="password" onChange={handleInputs} name="password" id="password" placeholder='Enter Password' value={user.password === "" ? "" : user.password} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-1">
                    <div className="col-sm-12 col-md-8 col-lg-6 col-xl-4 p-0 d-flex flex-row-reverse">
                        <p className="m-0">
                            <Link to={"/user/forgot-password"}>Forgot Password?</Link>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-sm-12 col-md-8 col-lg-6 col-xl-4 p-0">
                        <button onClick={handleUserLogin} className='btn' type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login