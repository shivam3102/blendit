import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
    return (
        <React.Fragment>
           <div id="shopify-section-1595650811758" class="mt-5 shopify-section index-section">
                <div data-section-id="1595650811758" data-section-type="product-tab-type-1" class="product-tab-type-1 tab-model-wrap has_bg ">
                    <div class="container">
                        <div class="grid__item bottom-to-top hb-animate-element">
                            <div class="TTProduct-Tab">
                                <ul id="tab_product_1595650811758" class="nav nav-tabs">
                                    <li class="active"><a href="#tabs-1595656887930" data-toggle="tab" aria-expanded="false">Photos</a></li>
                                    <li class=""><a href="#tabs-1595650811758-0" data-toggle="tab" aria-expanded="false">Videos</a>
                                    </li>
                                    <li class=""><a href="#tabs-1595656854289" data-toggle="tab" aria-expanded="false">Booking</a>
                                    </li>
                                </ul>

                                <div class="tab-inner tab-content tab-container">
                                    <div >
                                        <div id="tabs-1595656887930" data-col="tabs-1595656887930" class="contents tab-pane fade product_col4 in active">
                                            <div class="row">
                                            
                                                <div class="col-md-2 px-2">
                                                    <div className='position-relative near-me-block'>
                                                        <img src="assets/img/Photos-1.png" alt="" className="img-fluid w-100" />
                                                        <div className='text-gradient'>
                                                            <h6 className='mb-0'>Georgie Carlson</h6>
                                                            <span><img src="assets/img/marker.png" alt="" className="" /><span className='ml-2'>London, UK</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 px-2">
                                                    <div className='position-relative near-me-block'>
                                                        <img src="assets/img/Photos-2.png" alt="" className="img-fluid w-100" />
                                                        <div className='text-gradient'>
                                                            <h6 className='mb-0'>Georgie Carlson</h6>
                                                            <span><img src="assets/img/marker.png" alt="" className="" /><span className='ml-2'>London, UK</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                        <div id="tabs-1595650811758-0" data-col="tabs-1595650811758-0" class="contents tab-pane fade product_col4">
                                            <div>
                                                <div class="col-xs-12">
                                                  
                                                    <div class="col-md-4 px-2">
                                                        <div className='video-gr position-relative'>
                                                            <img src="assets/img/Rectangle-1.png" alt="" className='img-fluid w-100' />
                                                            <div class="play">
                                                                <ion-icon name="play-circle-outline"></ion-icon>
                                                            </div>
                                                        </div>
                                                        <div class="card-div mx-0">
                                                            <h5>
                                                                Eyebrow tricks that work!
                                                            </h5>
                                                            <p>
                                                                Foundation: Rimmel Lasting Finish Eyelashes: Lacôme Teint Idole Lipstick: CYO Sheen Sweep
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 px-2">
                                                        <div className='video-gr position-relative'>
                                                            <img src="assets/img/Rectangle-1.png" alt="" className='img-fluid w-100' />
                                                            <div class="play">
                                                                <ion-icon name="play-circle-outline"></ion-icon>
                                                            </div>
                                                        </div>
                                                        <div class="card-div mx-0">
                                                            <h5>
                                                                Eyebrow tricks that work!
                                                            </h5>
                                                            <p>
                                                                Foundation: Rimmel Lasting Finish Eyelashes: Lacôme Teint Idole Lipstick: CYO Sheen Sweep
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                   
                                                </div>


                                            </div>
                                        </div>
                                        <div id="tabs-1595656854289" data-col="tabs-1595656854289" class="contents tab-pane fade product_col4">
                                            <div>
                                                <div class="col-xs-12 text-white">
                                                    <h5 className="side-title text-left font-28 font-weight-bold">
                                                        Online
                                                    </h5>
                                                    <p className="yu-udp pl-0 font-18">
                                                        Monday - Friday 9am - 6pm
                                                    </p>
                                                </div>
                                                
                                                <div class="col-md-4 mt-3">
                                                    <div className='card-div m-0 p-4'>
                                                        <h5 className='font-24'>
                                                            “1 on 1” Perfect Tone
                                                        </h5>
                                                        <p className='pb-2 font-14'>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                                                        </p>
                                                        <span className='font-20'>
                                                            45 minutes
                                                            <span className="foas-e">
                                                                £25
                                                            </span>
                                                        </span>
                                                        <div className='d-flex pt-4'>
                                                            <button  className='button text-uppercase font-weight-bold'>
                                                                Book Now
                                                            </button>
                                                          
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 text-center"><button class="btn btn-dark mt-5">Load More</button></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Tabs;
