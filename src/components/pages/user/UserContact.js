import React from 'react';
import Footer from '../../layouts/Footer';
import Subscribe from '../../page_components/Subscribe';
import Tabs from '../../page_components/Tabs';
import Userdetailsblock from '../../page_components/UserDetailsBlock';

const UserContact = () => {
    return (
        <main class="main-content">
           <div className='container mt-5'>
                <div className=''>
                    <h1 className='mb-0 product-head-title text-white'>Contact us</h1>
                    <h6 className='mb-0 font-28'>Lorem ipsum doloe imet dolr amet zonsectur frola realy pans</h6>
                
                    <div className='row mt-4'>
                        <div className='col-md-6'>
                            <div className='form__img'>
                                <form>
                                    <div className='form-group'>
                                        <input className='' type="text" placeholder='Name'/>
                                    </div>
                                    <div className='form-group'>
                                        <input className='' type="email" placeholder='Email'/>
                                    </div>
                                    <div className='form-group'>
                                        <textarea  placeholder='Message'></textarea>
                                    </div>
                                    <div className='mt-4'>
                                        <button className='button'>SEND MESSAGE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='h-100 d-flex justify-content-center align-items-center'>
                                <div >
                                    <ul className='text-white list-unstyled font-24 text-center'>
                                        <li>
                                            <span>hello@blendit.tips</span>
                                        </li>
                                        <li>
                                            <span>+44-213-999-8000</span>
                                        </li>
                                        <li>
                                            <span>Cambridge
                                            45 High Street Lane</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
                <Footer/>
           </div>
        </main>
    );
}

export default UserContact;
