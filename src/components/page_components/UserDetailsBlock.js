import React from 'react';
import { Link } from 'react-router-dom';

const Userdetailsblock = () => {
    return (
        <React.Fragment >
            <div className='row mb-5'>
                <div className='col-md-5'>
                    <div className='text-center'>
                        <div className=''>
                            <img src="assets/img/image2.png" className='img-fluid user-image' alt='' />
                        </div>
                        <div className='text-center'>
                            <button className='button w-unset m-auto px-4'>FOLLOW ARTIST</button>
                        </div>
                        <Link to="" className='mt-2 d-block text-white'><span>Message Luicille</span></Link>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className=''>
                        <h1 className='product-head-title mb-0 line-1'>Lucille Mendez</h1>
                        <div className='mark-artists text-white'>
                            <span className='mr-4'>
                                <span><img src="assets/img/mark.png" alt="Marker" /></span>
                                <span className='ml-2 font-weight-bold'>London, UK</span>
                            </span>
                            <small className=' font-weight-bold'>
                                26 years old, 2.9 miles away
                            </small>
                            
                        </div>
                        <div>
                            <span className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet.
                            </span>
                        </div> 
                        <div className=''>
                            <div className='profile-flex mt-5 mb-0 mx-0'>
                                <ul>
                                    <li>
                                        
                                        <button class="d-flex "><span>Evening </span></button>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Userdetailsblock;
