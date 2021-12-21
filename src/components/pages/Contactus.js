import React from 'react';
import { Link } from 'react-router-dom';

const Contactus = () => {
    return (
        <main class="main-content">
            <img src="assets/img/side-img.png" class="side-img" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="login col-sm-6">
                        <div class="title-up">



                            <form action="" class="sign">
                                <h4>
                                    Log into Blendit
                                </h4>
                                <p>
                                    Log in to your artist portal
                                </p>
                                <div class="input-gup">
                                    <img src="assets/img/email.png" class="img" alt=""/>
                                    <input type="text" placeholder="Email…"/>
                                </div>
                                <div class="input-gup">
                                    <img src="assets/img/lock.png" class="img" alt=""/>

                                    <input type="text" placeholder="Create password..."/>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>

                                <span>
                              
                                    <Link to="">Forgot your password?</Link>
                                </span>
                                <button class="button">
                                    LOG IN
                                </button>

                                <span>
                                    Don’t have an account yet? 
                                    <Link to="">Create account</Link>
                                </span>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contactus;
