import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

const Account = () => {
    return (
        <main className="main-content">

            <div className="container">
                <div className="row">
                    <div className="login col-sm-6">
                        <div className="title-up">
                            <h4>
                                Your account
                            </h4>
                            <button className="button btn-main mt-4 mb-2 " >
                                SECURITY
                            </button>

                            <form action="" className="sign form-check-account">
                                <div className="input-gup">
                                    <input type="text" className="p-2" placeholder="Current password"/>
                                </div>
                                <div className="input-gup">
                                    <input type="text" className="p-2" placeholder="New password"/>
                                </div>
                                <div className="input-gup">
                                    <input type="text" className="p-2" placeholder="Repeat new password"/>
                                </div>
                                <a href="chek-login.html" className="button">
                                    UPDATE PASSWORD
                                </a> 
                                <button className="button btn-main mb-2 mt-100" >
                                    SECURITY
                                </button>
                                <div className="form-check mt-4 form-check-check" >
                                    <label className="form-check-label text-white  pl-2" for="flexCheckDefault">
                                        <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                       <span className='radio-check '> Profile activity</span>
                                    </label>
                                    <div className="form-check pl-4" >
                                        <ui className="list-unstyled">
                                            <li>
                                                <label className='d-flex'>
                                                    <input type="radio" name="profile_activity"/>
                                                    <div className='ml-3 radio-check line-1'>
                                                        <strong>All</strong><br/>
                                                        <span>All pings</span>
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <label className='d-flex'>
                                                    <input type="radio" name="profile_activity"/>
                                                    <div className='ml-3 radio-check line-1'>
                                                        <strong>Daily</strong><br/>
                                                        <span>Daily digest</span>
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <label className='d-flex'>
                                                    <input type="radio" name="profile_activity"/>
                                                    <div className='ml-3 radio-check line-1'>
                                                        <strong>None</strong><br/>
                                                        <span>No emails</span>
                                                    </div>
                                                </label>
                                            </li>
                                        </ui>
                                    </div>
                                </div>
                                
                                <div className="form-check mt-4 form-check-check" >
                                    <label className="form-check-label text-white  pl-2" for="flexCheckDefault">
                                        <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                       <span className='radio-check '> Blendit News</span>
                                    </label>
                                    <div className="form-check pl-4" >
                                        <ui className="list-unstyled">
                                            <li>
                                                <label className='d-flex'>
                                                    <input type="radio" name="blendit_news"/>
                                                    <div className='ml-3 radio-check line-1'>
                                                        <strong>All</strong><br/>
                                                        <span>All tips & updates</span>
                                                    </div>
                                                </label>
                                            </li>
                                            <li >
                                                <label className='d-flex'>
                                                    <input type="radio" name="blendit_news"/>
                                                    <div className='ml-3 radio-check line-1'>
                                                        <strong>Critical</strong><br/>
                                                        <span>Important updates</span>
                                                    </div>
                                                </label>
                                            </li>
                                            
                                        </ui>
                                    </div>
                                </div>
                                <div className="form-check mt-4 form-check-check" >
                                    <label className="form-check-label text-white  pl-2" for="flexCheckDefault">
                                        <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                                       <span className='radio-check '> Booking Confirmation</span>
                                    </label>
                                </div>
                              
                                <button className="button btn-main mb-2 mt-100">
                                  GETTING PAID
                                </button>
                                <p className="form-check-label text-white font-20 pl-2" for="flexCheckDefault" >
                                    Payment to paypal lucilleF93@gmail.com
                                </p>
                                <button className="button btn-paid" >
                                    REMOVE PAYPAL ACCOUNT
                                </button></form>


                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    );
}

export default Account;
