import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import SliderText from '../page_components/SliderText';
import Subscribe from '../page_components/Subscribe';

const Home = () => {
    return (
        <div class="page-wrapper page-element">
          
            <main class="main-content">
                <div className='container'>
                    <div className='row  mt-5 position-relative'>
                        <div className='top-artist'>
                            <div className=''>
                                <h2 className='top-title'>Learn from Online Tutorials
                                    Buy the Latest Products
                                    Find the Right Artists
                                </h2>

                                <Link to='/near-me' className='button w-50 mt-5 text-white'>FIND ARTIST</Link>
                            </div>
                        </div>
                        <div className='col-md-8 ml-auto'>
                            <div className='position-relative'>
                                <img src="assets/img/image1.png" className='img-fluid w-100' alt="Top img" />
                            </div>
                        </div>
                    </div>

                    <SliderText/>
                </div>

                <section className='container'>
                <div className=' my-5'>
                        <div className='row py-5'>
                            <div className='col-md-8'>
                                <h1 className='product-head-title'>Products used by Professionals. </h1>
                            
                            </div>
                        </div>
                        <img src="assets/img/makeup.png" className='img-fluid' alt="" />
                </div>

                    <div className='py-5'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className=''>
                                    <img src="assets/img/image3.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-md-5 position-relative'>
                                <div className='pro-set-title'>
                                    <h2 className='product-head-title'>Learn from Makeup Artists</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className=''>
                            <div >
                                <h2>Learn from Makeup Artists</h2>
                            </div>
                        </div> */}
                    </div>
                    <div className='position-relative'>
                        <div className='poau-artist'>
                            <h2 className='product-head-title'>Bookings <br/>
                                can be Direct to 
                                Your Local Artists.
                            </h2>
                        </div>
                        <div className='row mt-5'>
                            {/* <div className='col-md-5'>
                                <div >
                                    <h2 className='product-head-title'>Bookings 
                                        can be Direct to 
                                        Your Local Artists.
                                    </h2>
                                </div>
                            </div> */}
                            <div className='col-md-7 ml-auto'>
                                <div className=''>
                                    <img src="assets/img/image4.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            <section className='position-relative'>
                    <img src="assets/img/side-img.png" className='side-img img-fluid mt-5' alt="" />
                    <div className='container pt-5 position-relative'>
                        <img src="assets/img/JoinBlendit.png" className='img-fluid mt-5 artist-set' alt="" />
                        
                        <div className='mt-5 row artist-set'>
                            <div className='col-md-5 py-5'>
                                <div className=''>
                                    <img src='assets/img/AsanArtist.png' className='img-fluid w-100' alt='' />

                                    <div className='mt-5'>
                                        <ul className='artist-list font-18 text-white'>
                                            <li>
                                                <span>A platform as well as a community</span>
                                            </li>
                                            <li>
                                                <span>Artists share their expertise</span>
                                            </li>
                                            <li>
                                                <span>Blogs, Tutorials and Bookings to keep you feeling great</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="" className='button my-5 text-white'>SIGN UP - IT'S FREE</Link>
                                </div>
                            </div>
                            <div className='col-md-5 offset-md-2 py-5'>
                                <div className=''>
                                    <img src='assets/img/AsanArtist.png' className='img-fluid w-100' alt='' />

                                    <div className='mt-5'>
                                        <ul className='artist-list font-18 text-white'>
                                            <li>
                                                <span>A platform as well as a community</span>
                                            </li>
                                            <li>
                                                <span>Artists share their expertise</span>
                                            </li>
                                            <li>
                                                <span>Blogs, Tutorials and Bookings to keep you feeling great</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="" className='button my-5 text-white'>SIGN UP - IT'S FREE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
                <section className='container py-5'>
                    <h2 className='product-head-title'>Blog</h2>

                    <div className='row artist-set'>
                        <div className='col-md-6 mt-5'>
                            <div className=''>
                                <div className=''>
                                    <img src='assets/img/blog1.png' className='img-fluid w-100' alt='' />
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
                                    <img src='assets/img/blog2.png' className='img-fluid w-100' alt='' />
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
                        <button className='btn btn-dark mt-5'>See All</button>
                    </div>
                </section>

                <Subscribe/>

                {/* footer */}
                <Footer/>
            </main>
        </div>
    );
}

export default Home;
