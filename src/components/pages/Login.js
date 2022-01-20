import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main className="main-content">
            <img src="assets/img/side-img.png" className="side-img" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="login col-sm-6">
                        <div className="title-up">



                            <form action="" className="sign">
                                <h4>
                                    Log into Blendit
                                </h4>
                                <p>
                                    Log in to your artist portal
                                </p>
                                <div className="input-gup">
                                    <img src="assets/img/email.png" className="img" alt=""/>
                                    <input type="text" placeholder="Email…"/>
                                </div>
                                <div className="input-gup">
                                    <img src="assets/img/lock.png" className="img" alt=""/>

                                    <input type="text" placeholder="Create password..."/>
                                </div>

                                <div className="form-check form-check-check ">
                                    <label className='form-check-label'>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <span className="radio-check font-16" for="flexCheckDefault">
                                            <small className='font-14'>Remember me</small>
                                        </span>
                                    </label>
                                </div>

                                <span>
                              
                                    <Link to="" className='font-weight-bold'>Forgot your password?</Link>
                                </span>
                                <Link to='/near-me' className="button">
                                    LOG IN
                                </Link>

                                <span>
                                    Don’t have an account yet? 
                                    <Link to="/welcome-register" className='font-weight-bold'> Create account</Link>
                                </span>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
