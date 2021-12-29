import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';

const Home = () => {
    return (
        <div class="page-wrapper page-element">
            <Header/>
            <main class="main-content">
                <div className='container'>
                    <div className='row  mt-5 position-relative'>
                        <div className='top-artist'>
                            <div className=''>
                                <h2 className='top-title'>Learn from Online Tutorials
                                    Buy the Latest Products
                                    Find the Right Artists
                                </h2>

                                <Link to='' className='button w-50 mt-5 text-white'>FIND ARTIST</Link>
                            </div>
                        </div>
                        <div className='col-md-8 ml-auto'>
                            <div className='position-relative'>
                                <img src="assets/img/image1.png" className='img-fluid w-100' alt="Top img" />
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5 padt-50'>
                        
                        <div className='col-md-8'>
                            <div >
                                <img src="assets/img/image2.png" className='img-fluid w-100' alt="Top img" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pii-artists' >
                                <h2 className='pt-5'>
                                    <span className='font-weight-light'>Meet Artists like</span><br/>
                                    <span >Sara Mitchell</span>
                                </h2>
                                <div className='mark-artists text-white'>
                                    <span>
                                        <span><img src="assets/img/mark.png" alt="Marker" /></span>
                                        <span className='ml-2 font-weight-bold'>London, UK</span>
                                    </span>
                                    <small className='d-block font-weight-bold'>
                                        26 years old, 2.9 miles away
                                    </small>
                                    <small className='d-block'>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        Lorem ipsum dolor sit amet, consectetur 
                                        Lorem ipsum dolor sit amet, consectetur 
                                    </small>
                                </div>
                                
                                <Link to="" className='button mt-5 w_50 text-white'>VIEW PROFILE</Link>
                            </div>
                        </div>
                    </div>
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

                <div className='bg-dark-g py-5 '>
                    <div className='container'>
                        <div className='row py-3'>
                            <div className='col-md-5'>
                                <div className=''>
                                    <h2 className='font-48'>Subscribe to get tips & updates</h2>
                                    <span className='text-white font-16'>Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt </span>

                                    <form className='mt-5'>
                                        <input className='form-control input-form' placeholder='Your email...'/>
                                        <button className='button font-weight-bold mt-5' >SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                            <div className='col-md-6 offset-md-1'>
                                <div className=''>
                                    <img src="assets/img/image10.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
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
            </main>
        </div>
    );
}

export default Home;
