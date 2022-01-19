import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';

const Payment = () => {
    return (
        <div class="page-wrapper page-element">
            <main class="main-content">
            <div className='container mt-5'>
                    <div className='pb-5'>
                        
                        <div className='row mx-0'>
                        
                            <div className='col-md-8'>
                                <div className='text-white py-5'>
                                    <h1 className='product-head-title mb-0 line-1'>Appointment confirmation with</h1>
                                    <h1 className='product-head-title col-primary mb-0 line-1'>Lucille Mendez</h1>
                                    <h3 className='font-36 line-1'>
                                        <img src="assets/img/mark.png" alt="location" className='w-17 img-fluid mr-2'/> 
                                        London, UK
                                    </h3>
                                </div>
                            </div>
                        </div>

                        

                    <div className="my-5 row mx-0 py-5">
                        <div className="col-md-6">
                                <div className="bg-white p-3 col-dark">
                                    <div class="d-flex justify-content-between pb-3">
                                        <div className="col-md-9 px-1">
                                            <strong className="font-18">“1 on 1” Perfect Tone (online)
                                                <small className='d-block'>Online Appointment</small>
                                            </strong>
                                            <span className='d-block'>Meet online via details given by Lucille at 9:00am</span>
                                        </div>
                                        <div className="col-md-1 px-1">
                                            <strong className='font-16'>£25</strong>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between mt-4 pb-3 ">
                                        <div className="col-md-9 px-1">
                                            <strong className="font-16 d-block">Date & Time</strong>
                                            <span>Saturday, 9th of March at 9:00am</span>
                                        </div>
                                    
                                    </div>
                                    <div class="d-flex justify-content-between mt-4 border-bottom pb-3">
                                        <div className="col-md-9 px-1">
                                            <strong className="font-16 d-block">Booked for:</strong>
                                            <span>Myself (Louis Whittal)</span>
                                        </div>
                                    
                                    </div>
                                    <div class="d-flex justify-content-between font-16 mt-4 border-bottom pb-3">
                                        <div className="col-md-9 px-1">
                                            <strong className="d-block">Appointment Details:</strong>
                                            <span>“1 on 1” Perfect Tone</span>
                                        </div>
                                        <div className="col-md-1 px-1">
                                            <strong className='col-primary '>1x</strong>
                                        </div>
                                        <div className="col-md-1 px-1">
                                            <strong>£25</strong>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between font-16 mt-4 border-bottom pb-3">
                                        <div className="col-md-9 px-1">
                                            <strong className="d-block">Appointment Details:</strong>
                                            <span>“1 on 1” Perfect Tone</span>
                                        </div>
                                        <div className="col-md-1 px-1">
                                            <strong className='col-primary '>1x</strong>
                                        </div>
                                        <div className="col-md-1 px-1">
                                            <strong>£25</strong>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between font-16 py-4">
                                        <div className="col-md-9 px-1">
                                            <strong className="">Total</strong>
                                        </div>
                                    
                                        <div className="col-md-1 px-1">
                                            <strong>£25</strong>
                                        </div>
                                    </div>
                                </div>
                        </div>
                            <div className=" col-sm-6">
                                <div className="bg-white p-4 payment">
                                    <form action="" className=" col-dark">
                                        <h6 className="font-18 font-weight-bold col-dark">Your billing details</h6>
                                    
                                        <div class="input-gup">
                                            <img src="assets/img/user.png" class="img" alt=""/>
                                            <input type="text" placeholder="Full name..."/>
                                        </div>
                                        <div class="input-gup">
                                            <img src="assets/img/email.png" class="img" alt=""/>
                                            <input type="email" placeholder="Email..."/>
                                        </div>

                                        <div className="">
                                            <h6 className="font-18 font-weight-bold col-dark">Payment</h6>

                                            <div class="input-gup">
                                                <input type="text" className='pl-3' placeholder="Card number..."/>
                                            </div>
                                            <div class="input-gup justify-content-between d-flex ">
                                                <div className='d-flex'>
                                                    <input type="text" className='width-60 pl-3' placeholder="MM"/>
                                                    <input type="text" className="ml-2 width-60 pl-3" placeholder="YYYY"/>
                                                </div>
                                                <div>
                                                <input type="text" className='width-60 pl-3' placeholder="CVV"/>
                                                </div>

                                            </div>  

                                            <button className="button mt-5">PAY £25</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className='bg-dark-g py-5 my-5'>
                        <div className='container'>
                            <div className='row py-3'>
                                <div className='col-md-5'>
                                    <div className=''>
                                        <h2 className='font-48'>Why not check out some of the other artists?</h2>
                                        <button className='button font-weight-bold mt-5' >SEE ARTISTS</button>
                                    </div>
                                </div>
                                <div className='col-md-6 offset-md-1'>
                                    <div className=''>
                                        <img src="assets/img/Rectangle.png" className='img-fluid' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </div>
            </main>
        </div>
    );
}

export default Payment;
