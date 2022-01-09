import React from 'react';
import Footer from '../../layouts/Footer';
import Subscribe from '../../page_components/Subscribe';
import Tabs from '../../page_components/Tabs';
import Userdetailsblock from '../../page_components/UserDetailsBlock';

const UserAbout = () => {
    return (
        <main class="main-content">
           <div className='container mt-5'>
                <div className='pb-5'>
                    
                    <div className='row mx-0'>
                        <div className='col-md-6'>
                            <img src="assets/img/user-about.png" className='img-fluid w-100' alt=""/>
                        </div>
                        <div className='col-md-6'>
                            <div className='text-white py-5'>
                                <h1 className='product-head-title mb-0'>About Blendit</h1>
                                <h5 className='font-28 mb-0'>Lorem ipsum Tagline</h5>
                                <p className='font-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='row mx-0 my-5 py-5'>
                        <div className='col-md-4 mt-2'>
                            <div className='text-center'>
                                <div>
                                    <img src="assets/img/Oval1.png" className='img-fluid' alt='' />
                                </div>
                                <p className='mt-4 text-gry font-18'>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            
                        </div>
                        <div className='col-md-4 mt-2'>
                            <div className='text-center'>
                                <div>
                                    <img src="assets/img/Oval2.png" className='img-fluid' alt='' />
                                </div>
                                <p className='mt-4 text-gry font-18'>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            
                        </div>
                        <div className='col-md-4 mt-2'>
                            <div className='text-center'>
                                <div>
                                    <img src="assets/img/Oval3.png" className='img-fluid' alt='' />
                                </div>
                                <p className='mt-4 text-gry font-18'>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            
                        </div>

                    </div>

                    <div className='my-5 py-5 text-white'>
                        <h4 className='mb-0 font-28p'>Lorem Ipsum</h4>
                        <p className='font-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    </div>
                </div>
                <Subscribe/>
                <Footer/>
           </div>
        </main>
    );
}

export default UserAbout;
