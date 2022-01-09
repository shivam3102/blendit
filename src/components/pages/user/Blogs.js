import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import Subscribe from '../../page_components/Subscribe';
import Tabs from '../../page_components/Tabs';
import Userdetailsblock from '../../page_components/UserDetailsBlock';

const Blogs = () => {
    return (
        <main class="main-content">
           <div className='container mt-5'>
               
                <div className='pb-5'>
                    <h1 className='font-48 text-white'>Blogs</h1>    

                    <div className='row '>
                        <div className='col-md-6 mt-5'>
                            <div className=''>
                                <div className=''>
                                    <img src='assets/img/blog3.png' className='img-fluid w-100' alt='' />
                                </div>
                                <div className='artist-text'>
                                    <h4>Category</h4>
                                    <Link to="" className='text-white blog-link'>Best makeup for your gals</Link>
                                    <span>Author: Lucille Mendez</span>
                                    <small className='text-white d-block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className=''>
                                <div className=''>
                                    <img src='assets/img/blog4.png' className='img-fluid w-100' alt='' />
                                </div>
                                <div className='artist-text'>
                                    <h4>Category</h4>
                                    <Link to="" className='text-white blog-link'>Best makeup for your gals</Link>
                                    <span>Author: Lucille Mendez</span>
                                    <small className='text-white d-block'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-5 text-center'>
                        <button className='btn btn-dark mt-5'>Load More</button>
                    </div>
                </div>
                <Subscribe/>
                <Footer/>
           </div>
        </main>
    );
}

export default Blogs;
