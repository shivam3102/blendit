import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='container'>
                    <div className='pt-5'>
                        <ul className='text-white footer-list'>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to=''>Artists</Link>
                            </li>
                            <li>
                                <Link to=''>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4 text-center'>
                        <img src="assets/img/footer-bledndit.png" className='img-fluid' alt=''/>
                    </div>
                    <div className='row py-2'>
                        <div className='col-md-4'>
                            <div className=''>
                                <ul className='list-unstyled te-center d-flex mb-0'>
                                    <li>
                                        <Link to=''>
                                            <img src="assets/img/facebook.png" className='img-fluid' alt=''/>
                                        </Link>
                                    </li>
                                    <li className='ml-3'>
                                        <Link to=''>
                                            <img src="assets/img/twitter.png" className='img-fluid' alt=''/>
                                        </Link>
                                    </li>
                                    <li className='ml-3'>
                                        <Link to=''>
                                            <img src="assets/img/instagram.png" className='img-fluid' alt=''/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-white d-flex justify-content-center align-items-center text-center'>
                                <span>© 2020 Flashtag Ltd</span>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className=' just-center '>
                                <ul className='list-unstyled text-white d-flex  font-weight-bold foot-links'>
                                    <li>
                                        <Link to=''>
                                            <span>Support</span>
                                        </Link>
                                    </li>
                                    <li className='ml-5'>
                                        <Link to=''>
                                            <span>Terms of service</span>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Footer;
