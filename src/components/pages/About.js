import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

const About = () => {
    return (
        <React.Fragment>
            <main className="main-content " >
                <div className="container">
                    <div className="row">
                        <div className="login text-white">
                            
                            <div className="col-sm-12">
                            <h1 className='ar-text '>About You</h1>

                                <h4 className="sub-title">
                                    Basic info and profile
                                </h4>
                                <div className="login col-sm-6">
                                    <div className="title-up">



                                        <form action="" className="sign">

                                            <h5 className="mb-0">
                                                Date of birth
                                            </h5>
                                            <p className="mb-0">
                                                Used to display your age on your profile
                                            </p>
                                            <div className="input-gup">

                                                <input type="date" className="pl-4 "/>
                                            </div>
                                            <div className="form-check form-check-check">
                                                <input className="form-check-input mt-3 mr-2" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="text-white form-check-label ml-4 font-20" for="flexCheckDefault">
                                                    Make my age private
                                                </label>
                                            </div>
                                            <h5 className="font-40">
                                                Profile info
                                            </h5>
                                            <p>
                                                Tell followers and potential customers a bit more about you…
                                            </p>
                                            <textarea name="" id="" className="font-18 h-250"  placeholder="Profile info" cols="30" rows="10"></textarea>
                                            <span className="float-right">0 / 1000 Characters Max.</span>
                                            <h5 className="font-40">
                                                Speciality
                                            </h5>
                                            <p>
                                                Your areas of specialisation and core skills
                                            </p>
                                            <div className="position-relative">
                                                <input type="text" placeholder="Search..." className="input-core"/>
                                                <span className='search-iconn'><i class="fas fa-search"></i></span>
                                            </div>
                                            <ul className="d-flex flex-wrap border-bottom pb-3">

                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>
                                                <li className="m-1">
                                                    <button className="btn btn-basic" >
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="checkmark-outline" className="font-18 pl-1"></ion-icon>
                                                    </button>
                                                </li>



                                            </ul>
                                            {/* display: flex; flex-wrap: wrap;  padding-bottom: 15px; */}
                                            <ul className="d-flex flex-wrap pb-3">
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                                <li classNam="m-1">
                                                    <button className="btn btn-check">
                                                        <span>
                                                            Everyday
                                                        </span>
                                                        <ion-icon name="add-outline"  className="ion-iconss"></ion-icon>
                                                    </button>
                                                </li>
                                            </ul>
                                            <button className="button">
                                                NEXT
                                            </button>
                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        

                <Footer/>
            </main>



            
        </React.Fragment>
    );
}

export default About;
