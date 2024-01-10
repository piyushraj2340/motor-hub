import React, { useState, useEffect, useContext }  from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

// animation should be also be in the last

function Signup() {
    document.title = "Signup";

    const {setLoginLogout} = useContext(UserContext);

    const [loginStatus, setLoginStatus] = useState({
        status: "",
        message: ""
    });

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        gender: "",
        age: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
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

    const handleUserSignup = async (e) => {
        setLoginStatus({status: "", message: ""});
        e.preventDefault();

        const res = await fetch("/auth/sign-up", {
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
        } else {
            setLoginLogout({ type: "USER", payload: false });
            setLoginStatus({ status: false, message: result.message });
            setUser({ ...user, password: "", confirmPassword: ""});
        }
    }

    return (
        <div className='container mt-4 p-5'>
            <form method="post" className='form-login p-5'>
                <div className="row justify-content-center">
                    <div className={`col-sm-12 col-md-4 col-lg-3 col-xl-2 text-center not-active`}>
                        <Link to={"/login"} className='btn'>Login</Link>
                    </div>
                    <div className={`col-sm-12 col-md-4 col-lg-3 col-xl-2 text-center active`}>
                        <Link to={"/signup"} className='btn'>Signup</Link>
                    </div>
                </div>
                <div className="row m-3">
                    <p className="text-center m-0">Connect With Social Account: </p>
                </div>
                <div className="row m-3">
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
                        <p className={`text-center ${loginStatus.status === true ? 'text-success' : 'text-danger'} m-0`}>{`${loginStatus.status === true ? loginStatus.message : loginStatus.message}`}</p>
                    </div>
                }
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-6 col-xl-4 p-0">

                        <input type="text" onChange={handleInputs} name="name" id="name" placeholder='Enter Name' />
                        <input type="email" onChange={handleInputs} name="email" id="email" placeholder='Enter Email' />
                        <input type="number" onChange={handleInputs} name="phone" id="phone" placeholder='Enter Phone' />
                        <input type="number" onChange={handleInputs} name="age" id="age" placeholder='Enter Age' />
                        <div className="row">
                            <div className="row ms-1 mt-1">
                                <label className="m-1 radio-label-container text-muted" htmlFor="gender-male">Male
                                    <input type="radio" onChange={handleInputs} className="m-2" id="gender-male" name="gender" value="male"/>
                                    <span className="check-mark-span"></span>
                                </label>
                            </div>
                            <div className="row ms-1 mt-1">
                                <label className="m-1 radio-label-container text-muted" htmlFor="gender-female">Female
                                    <input type="radio" onChange={handleInputs} className="m-2" id="gender-female" name="gender" value="female"/>
                                    <span className="check-mark-span"></span>
                                </label>
                            </div>
                            <div className="row ms-1 mt-1">
                                <label className="m-1 radio-label-container text-muted">Other
                                    <input type="radio" onChange={handleInputs} className="m-2" id="gender-other" name="gender" value="other"/>
                                    <span className="check-mark-span"></span>
                                </label>
                            </div>
                        </div>
                        <input type="password" onChange={handleInputs} name="password" id="password" placeholder='Enter Password' value={user.password === "" ? "" : user.password}/>
                        <input type="password" onChange={handleInputs} name="confirmPassword" id="confirmPassword" placeholder='Enter Confirm Password' value={user.confirmPassword === "" ? "" : user.confirmPassword} />

                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-sm-12 col-md-4 p-0">
                        <button onClick={handleUserSignup} className='btn' type="submit">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup