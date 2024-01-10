import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../App';


const Navigation = () => {
    const { loginLogout, cartLength } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid ">
                <Link className="navbar-brand cursive" to="/" style={{fontFamily: 'cursive'}}>MOTOR HUB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="mynavbar">
                    <form className="d-flex mt-2 col-sm-6">
                        <div className="input-group">
                            <select name="categories" id="categories" style={{ padding: "5px", borderRadius: "0.375rem 0 0 0.375remn" }}>
                                <option value="all">All Categories</option>
                            </select>
                            <input className="form-control" type="text" placeholder="Search Keywords" style={{ boxShadow: "none" }} />
                            <button className="btn btn-info" type="button"><i className='fas fa-search'></i></button>
                        </div>
                    </form>
                    <div className="navbar-nav d-flex justify-content-end">
                        <div className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact Us</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to={`${loginLogout ? "/profile" : "/login"}`}><i className='fas fa-user-alt'></i>{loginLogout ? " Profile" : " Login"}</Link>
                        </div>
                        <div className="nav-item">
                            <Link style={{ position: "relative" }} className="nav-link" to="/cart">
                                <i style={{ fontSize: "23px" }} className="fas fa-shopping-cart small"> </i>
                                {cartLength?<span style={{ fontSize: "10px", position: "absolute", top: "0px", left: "18px" }} className='badge bg-success'>{cartLength}</span>:<span></span>}
                                <span> Cart</span>
                            </Link>
                        </div>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/payments">Payments</Link>
                        </li> */}
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navigation


