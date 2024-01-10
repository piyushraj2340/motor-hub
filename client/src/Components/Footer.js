import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-white text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <Link to="" className="me-4 link-secondary">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="" className="me-4 link-secondary">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="" className="me-4 link-secondary">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="" className="me-4 link-secondary">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="" className="me-4 link-secondary">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="" className="me-4 link-secondary">
                        <i className="fab fa-github"></i>
                    </Link>
                </div>
            </section>
            <section className="mt-4">
                <form action="">
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <p className="pt-2">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="form-outline form-white mb-4">
                                <input type="email" id="sub-email" className="form-control" placeholder='Email address' />
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-dark mb-4">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <Link className="navbar-brand" to="/" style={{fontFamily: 'cursive'}}>Motor HUB</Link>
                            </h6>
                            <p>
                                Go to the products section or scroll UP to see the collection of Cars and Bikes.
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link to="/products" className="text-reset">Products</Link>
                            </p>
                            <p>
                                <Link to="#" className="text-reset">Settings</Link>
                            </p>
                            <p>
                                <Link to="#" className="text-reset">Orders</Link>
                            </p>
                            <p>
                                <Link to="#" className="text-reset">Help</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                            <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                info@example.com
                            </p>
                            <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                © 2021 Copyright:
                <Link className="text-reset fw-bold" to="#"> MOTOR HUB</Link>
            </div>
        </footer>
    )
}

export default Footer