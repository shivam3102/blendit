import React from 'react';
import Footer from '../../layouts/Footer';

const Reference = () => {
    return (

        <div class="page-wrapper page-element">
            <main class="main-content">
            <div className='container mt-5'>
                    <div className='pb-5'>
                        
                        <div className='row mx-0'>
                        
                            <div className='col-md-8'>
                                <div className='text-white py-5 '>
                                    <h1 className='product-head-title mb-0 line-1'>Appointment confirmation with</h1>
                                    <h1 className='product-head-title col-primary mb-0 line-1'>Lucille Mendez</h1>
                                    <h3 className='font-36 line-1'>
                                        <img src="assets/img/mark.png" alt="location" className='img-fluid w-17 mr-2'/> 
                                        London, UK
                                    </h3>
                                </div>
                            </div>
                        </div>

                        

                        <div className='my-5 py-5 text-center'>
                            <h4 className='mb-0 font-48'>
                                    Thanks for booking! <br/>
                                    Your reference is:
                            </h4>
                            <h5 className='my-5 font-48 col-primary'>#35632</h5>

                            <button className='button mt-5 w-300 m-auto'>VIEW RECEIPT</button>
                            <div className='mt-4 mb-5 text-center'>
                                <button className='btn btn-dark '>MESSAGE</button>
                            </div>

                            <h5 className='font-weight-bolder font-28p'>Share this booking:</h5>
                            <div className='social-icons-s mt-3'>
                                <span>
                                    <i class="fab fa-facebook-f"></i>
                                </span>
                                <span>
                                    <i class="fab fa-instagram"></i>
                                </span>
                                <span>
                                    <i class="fab fa-linkedin-in"></i>
                                </span>
                                <span>
                                    <i class="fab fa-twitter"></i>
                                </span>
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

export default Reference;
