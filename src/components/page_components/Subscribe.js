import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-dark-g py-5 my-5'>
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
    );
}

export default Subscribe;
