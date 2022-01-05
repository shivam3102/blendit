import React from 'react';

const AboutYou = () => {
    return (
        <React.Fragment>
            <main className="main-content mb-0" >
                <div className="container">
                    <div className="row">
                        <div className="login ">
                            <img src="assets/img/Aboutyou.png" alt="" className="pl-30 artist-2"/>

                            <div className="col-sm-12">

                                <h4 className="sub-title">
                                    Basic info and profile
                                </h4>
                                <div className="login col-sm-6">
                                    <div className="title-up">



                                        <form action="" className="sign">

                                            <h5 className=" font-25">
                                               Date of birth
                                            </h5>
                                            <p className='mb-0'>
                                            Used to display your age on your profile
                                            </p>

                                            <div className='input-gup'>
                                                <input type="date" name=""/>
                                            </div>
                                          <div className='ml-2'>
                                            <input type='checkbox' name='' /> 
                                            <span className='ml-2 font-20 font-weight-bolder'>Make my age private</span>
                                          </div>

                                            <div className='mt-5'>
                                                <h5 className=" font-25">
                                                    Profile Info
                                                </h5>
                                                <p className='mb-0'>
                                                    Tell followers and potential customers a bit more about you…
                                                </p>

                                                <div className='input-gup'>
                                                    <textarea name="" placeholder='Profile-info'></textarea>
                                                </div>
                                            </div>


                                            <div className='mt-5'>
                                                <h5 className=" font-25">
                                                    Speciality
                                                </h5>
                                                <p className='mb-0'>
                                                    Your areas of specialisation and core skills
                                                </p>

                                                <div className='input-gup position-relative '>
                                                    <input type='text' name="search" placeholder='Search...'/>
                                                    <span className='poSearch'><i class="fas fa-search"></i></span>
                                                </div>

                                                <div className='profile-flex mt-5 mb-0 mx-0'>
                                                    <ul>
                                                        <li>
                                                            
                                                            <button class="d-flex "><span>Evening <span><i class="fas fa-check"></i></span></span></button>
                                                           
                                                        </li>
                                                    </ul>

                                                    
                                                </div>

                                                <div className='profile-flex mt-5 mb-0 mx-0'>
                                                    <ul className=''>
                                                        <li>
                                                            
                                                            <button class="d-flex bg-gray"><span>Evening <span><i class="fas fa-plus"></i></span></span></button>
                                                           
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            
                                            <button className="button" >
                                                NEXT
                                            </button>
                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </React.Fragment>
    );
}

export default AboutYou;
