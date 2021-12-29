import React from 'react';
import { Link } from 'react-router-dom';


const SliderText = () => {
    return (
        <React.Fragment>
            <div className='row mt-5 padt-50'>
                        
                        <div className='col-md-8'>
                            <div >
                                <img src="assets/img/image2.png" className='img-fluid w-100' alt="Top img" />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pii-artists' >
                                <h2 className='pt-5'>
                                    <span className='font-weight-light '>Meet Artists like</span><br/>
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
        </React.Fragment>
    );
}

export default SliderText;
