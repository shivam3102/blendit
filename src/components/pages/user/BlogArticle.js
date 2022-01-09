import React from 'react';
import Footer from '../../layouts/Footer';
import Subscribe from '../../page_components/Subscribe';
import Tabs from '../../page_components/Tabs';
import Userdetailsblock from '../../page_components/UserDetailsBlock';

const BlogArticle = () => {
    return (
        <main class="main-content">
           <div className='container mt-5'>
                <div className='pb-5'>
                    
                    <div className='row mx-0'>
                        <div className='col-md-5'>
                            <h6 className='mb-0 col-primary font-24'>Category</h6>
                            <h1 className='font-48 text-white line-height2'>How to hide the frown lines</h1>
                        </div>
                    </div>
                    <div className='row mx-0 my-5'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='text-white blog-article'>
                                <div className='text-center'>
                                    <img src="assets/img/image1.png" alt='' className='img-fluid w-100' />
                                    <span>Small caption about the photo / video / link</span>
                                </div>
                               
                                <h4>Lorem the ipsum to it!</h4>
                                <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqa do eiusmod tempor incididunt ut labore et dolore magna aliqa ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqa do eiusmod tempor incididunt ut labore et dolore magna aliqa re magna aliqa do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqa ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqa do eiusmod tempor incididu
                                </p>
                                
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

export default BlogArticle;
