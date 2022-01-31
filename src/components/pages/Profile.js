import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Subscribe from '../page_components/Subscribe';
// import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Profile = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      ];
    return (
        <div className="page-wrapper page-element">
            <main className="main-content">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-sm-12 profile-flex">
                            <div className="sectin-profile">
                                <div className="user">
                                    <img src="assets/img/Photos-2.png" alt="" />
                                    <button className="button profile-buottn">
                                        PREVIEW PROFILE
                                    </button>
                                </div>
                            </div>
                            <div className="sectin-profile-2">
                                <h3>
                                    Lucille Mendez
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet
                                    dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliquaLorem
                                    ipsum dolor sit amet.
                                </p>
                                <ul>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-flex">
                                            <span>
                                                Evening
                                            </span>
                                            <ion-icon name="trash-outline" className="pl-1 font-18">
                                            </ion-icon>
                                        </button>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        <div id="shopify-section-1595650811758" className="shopify-section index-section">
                            <div data-section-id="1595650811758" data-section-type="product-tab-type-1" className="product-tab-type-1 tab-model-wrap has_bg ">
                                <div className="container">
                                    <div className="grid__item bottom-to-top hb-animate-element">
                                        <div className="TTProduct-Tab">
                                            <ul id="tab_product_1595650811758" className="nav nav-tabs">
                                                <li className="active"><a href="#tabs-1595656887930" data-toggle="tab" aria-expanded="false">Photos </a></li>
                                                <li className=""><a href="#tabs-1595650811758-0" data-toggle="tab" aria-expanded="false">Videos</a>
                                                </li>
                                                <li className=""><a href="#tabs-1595656854289" data-toggle="tab" aria-expanded="false">Booking </a>
                                                </li>
                                            </ul>

                                            <div className="tab-inner tab-content tab-container">
                                                <div className="row">
                                                    <div id="tabs-1595656887930" data-col="tabs-1595656887930" className="contents tab-pane fade product_col4 in active">
                                                        <div>
                                                            <div className="col-xs-12">
                                                                <div className="col-xs-2 col-xs-6 ">
                                                                    <button type="button" className="btn-info " data-toggle="modal" data-target="#myModal">
                                                                        <img src="assets/img/Photos.png" alt="" className="img-fluid w-100" />
                                                                    </button>
                                                                    <div className="modal fade" id="myModal" role="dialog">
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">

                                                                                <div className="col-sm-12">
                                                                                    <div className="form__img">
                                                                                        <h2>Upload a photo</h2>
                                                                                        <input type="file" className="upload_im" accept=".png, .jpg, .jpeg" />
                                                                                        <button className="button profile-buottn">
                                                                                            UPLOAD FILE (.JPG or .PNG)
                                                                                        </button>
                                                                                        <span>
                                                                                            3 mb maximum file size
                                                                                        </span>
                                                                                        <h5 className="font-25 font-weight-light mb-0 mt-4 text-white">
                                                                                            Description
                                                                                        </h5>
                                                                                        <p className="mb-1">
                                                                                            Caption The Image
                                                                                        </p>
                                                                                        <textarea name="" id="" className="piks" placeholder="Image description" cols="30" rows="10"></textarea>
                                                                                        <small className="float-right">0 / 1000
                                                                                            Characters Max.</small>
                                                                                        <h5 className="mb-1 font-25 font-weight-light" >
                                                                                            Tags
                                                                                        </h5>
                                                                                        <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className="m-2">
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>
                                                                                        <h5 className="mb-1 font-25 font-weight-light" >
                                                                                            Products used
                                                                                        </h5>
                                                                                        <div className='position-relative'>
                                                                                        <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className="m-2">
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>
                                                                                        <button className="button profile-buottn bg-gray-o">
                                                                                            UPLOAD FILE (.JPG or .PNG)
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-1.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-2.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-3.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-4.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-5.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-6.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-7.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-8.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-9.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-10.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-11.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-12.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                                <div className="col-xs-2">
                                                                    <img src="assets/img/Photos-13.png" alt="" className="img-fluid w-100" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="tabs-1595650811758-0" data-col="tabs-1595650811758-0" className="contents tab-pane fade product_col4">
                                                        <div>
                                                            <div className="col-xs-12">
                                                                <div className="col-md-4 px-2">
                                                                    <button type="button" className="btn_ai" data-toggle="modal" data-target="#myModal-2">
                                                                        <img src="assets/img/Screenshot-1.png" className="w-100 img-fluid paus" alt=""  />
                                                                    </button>
                                                                    <div className="modal fade" id="myModal-2" role="dialog">
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">

                                                                                <div className="col-sm-12">
                                                                                    <div className="form__img">
                                                                                        <h2>Upload a video</h2>
                                                                                        <h5 className="side-title">
                                                                                            Youtube/Vimeo URL
                                                                                        </h5>
                                                                                        <input type="text"/>
                                                                                        {/* <h5 className="side-title">
                                                                                            Youtube URL
                                                                                        </h5>
                                                                                        <input type="text"/> */}
                                                                                        <h5  className=" side-title">
                                                                                            Description
                                                                                        </h5>
                                                                                        <p className="mb-1 ">
                                                                                            Caption the image
                                                                                        </p>
                                                                                        <textarea name="" id="" className='piks' placeholder="Image description" cols="30" rows="10"></textarea>
                                                                                        <small className="float-right">0 / 1000
                                                                                            Characters Max.</small>
                                                                                        <h5 className="font-25 mb-1 font-weight-light">
                                                                                            Tags
                                                                                        </h5>
                                                                                        <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className="m-2;">
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>
                                                                                        <h5 className=" font-25 mb-1 font-weight-light">
                                                                                            Products Used
                                                                                        </h5>
                                                                                        <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className="m-2">
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>

                                                                                        <button className="button profile-buottn bg-gray-o" data-toggle="modal" data-target="#myModal-3">
                                                                                            ADD VIDEO
                                                                                        </button>


                                                                                        <div className="modal fade" id="myModal-3" role="dialog">
                                                                                            <div className="modal-dialog">
                                                                                                <div className="modal-content">

                                                                                                    <div className="col-sm-12">
                                                                                                        <div className="form__img">
                                                                                                            <h2>Upload a video</h2>
                                                                                                            <input type="file" className="img-si" accept=".png, .jpg, .jpeg"/>
                                                                                                            <button className="button profile-buottn">
                                                                                                                UPLOAD FILE (.JPG or .PNG)
                                                                                                            </button>
                                                                                                            <span>
                                                                                                                3 mb maximum file size
                                                                                                            </span>
                                                                                                            <h5 className=" sub-title">
                                                                                                                Description
                                                                                                            </h5>
                                                                                                            <p className=" mb-1">
                                                                                                                Caption the image
                                                                                                            </p>
                                                                                                            <textarea name="" id=""  className="piks"  placeholder="Image description" cols="30" rows="10"></textarea>
                                                                                                            <span className='float-right font-10'>0 / 1000
                                                                                                                Characters Max.</span>
                                                                                                            <h5 className=" mb-1 font-25 font-weight-light" >
                                                                                                                Tags
                                                                                                            </h5>
                                                                                                            <div className="position-relative">
                                                                                                                <input type="text" placeholder="Search..." className="border-20" />
                                                                                                                <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                                                </ion-icon>
                                                                                                            </div>
                                                                                                            <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                                                <li className='m-2'>
                                                                                                                    <button className="btn d-flex ppiYbj" >
                                                                                                                        <span>
                                                                                                                            Loréal Dark Lashes
                                                                                                                        </span>
                                                                                                                        <ion-icon
                                                                                                                            name="checkmark-outline"
                                                                                                                    
                                                                                                                            role="img"
                                                                                                                            className="md hydrated font-18 pl-1"
                                                                                                                            aria-label="checkmark outline">
                                                                                                                        </ion-icon>
                                                                                                                    </button>
                                                                                                                </li>

                                                                                                            </ul>
                                                                                                            <h5 className='mb-1 font-25 font-weight-light'>
                                                                                                                Products used
                                                                                                            </h5>
                                                                                                            <div className="position-relative">
                                                                                                                <input type="text" placeholder="Search..." className="border-20" />
                                                                                                                <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                                                </ion-icon>
                                                                                                            </div>
                                                                                                            <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                                                <li className='m-2'>
                                                                                                                    <button className="btn d-flex ppiYbj" >
                                                                                                                        <span>
                                                                                                                            Loréal Dark Lashes
                                                                                                                        </span>
                                                                                                                        <ion-icon
                                                                                                                            name="checkmark-outline"
                                                                                                                    
                                                                                                                            role="img"
                                                                                                                            className="md hydrated font-18 pl-1"
                                                                                                                            aria-label="checkmark outline">
                                                                                                                        </ion-icon>
                                                                                                                    </button>
                                                                                                                </li>

                                                                                                            </ul>
                                                                                                            <button className="button profile-buottn bg-gray-o" >
                                                                                                                UPLOAD FILE (.JPG or .PNG)
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="modal-footer">
                                                                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                                                    </div>

                                                                                                </div>

                                                                                            </div>
                                                                                        </div>


                                                                                    </div>
                                                                                </div>




                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                                </div>





                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="col-md-4 px-2">
                                                                    <div className='video-gr position-relative'>
                                                                        <img src="assets/img/Rectangle-1.png" alt="" className='img-fluid w-100' />
                                                                        <div className="play">
                                                                            <ion-icon name="play-circle-outline"></ion-icon>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-div mx-0">
                                                                        <h5>
                                                                            Eyebrow tricks that work!
                                                                        </h5>
                                                                        <p>
                                                                            Foundation: Rimmel Lasting Finish Eyelashes: Lacôme Teint Idole Lipstick: CYO Sheen Sweep
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 px-2">
                                                                    <div className='video-gr position-relative'>
                                                                        <img src="assets/img/Rectangle-1.png" alt="" className='img-fluid w-100' />
                                                                        <div className="play">
                                                                            <ion-icon name="play-circle-outline"></ion-icon>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-div mx-0">
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
                                                    <div id="tabs-1595656854289" data-col="tabs-1595656854289" className="contents tab-pane fade product_col4">
                                                        <div>
                                                            <div className="col-xs-12">
                                                                <h5 className="side-title text-left">
                                                                    Online
                                                                </h5>
                                                                <p className="yu-udp ">
                                                                    Monday - Friday 9am - 6pm <span className="ml-2"><Link to="">edit availability description</Link></span>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-4 px-2">
                                                                <button type="button" className='m-b-none' data-toggle="modal" data-target="#myModal-4">
                                                                    <img src="assets/img/Screenshot-2.png" className="w-100 pmpi-s " alt=""/>
                                                                </button>
                                                                <div className="modal fade" id="myModal-4" role="dialog">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">

                                                                            <div className="col-sm-12">
                                                                                <div className="form__img">
                                                                                    <h2>Add an online course</h2>
                                                                                    <h5 className=" side-title">
                                                                                        Course Title
                                                                                    </h5>
                                                                                    <input type="text" placeholder="Title"/>
                                                                                    <h5 className=" side-title">
                                                                                        Course Description
                                                                                    </h5>
                                                                                    <input type="text" placeholder="Description"/>
                                                                                    <h5  className="  side-title">
                                                                                        Minutes
                                                                                    </h5>
                                                                                    <input type="number" placeholder='Enter Minutes'/>
                                                                                    <h5  className="  side-title">
                                                                                        Price
                                                                                    </h5>
                                                                                    <input type="text" placeholder="10 £"/>
                                                                                    <h5 className=" font-25 mb-1 font-weight-light">
                                                                                        Tags
                                                                                    </h5>
                                                                                    <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className='m-2'>
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>
                                                                                        <h5 className=" font-25 mb-1 font-weight-light">
                                                                                            Products used
                                                                                        </h5>
                                                                                        <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className='m-2'>
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>

                                                                                        <button className="button profile-buottn bg-gray-o" data-toggle="modal" data-target="#myModal-3" >
                                                                                            ADD VIDEO
                                                                                        </button>

                                                                                
                                                                                    <div className="modal fade" id="myModal-5" role="dialog">
                                                                                        <div className="modal-dialog">
                                                                                            <div className="modal-content">

                                                                                                <div className="col-sm-7">
                                                                                                    <div className="form__img">
                                                                                                        <h2>Foundation 101</h2>
                                                                                                        <button className="button iiu-btn" >SECURITY</button>
                                                                                                        <h5 className="  sub-title">
                                                                                                            Days of the week
                                                                                                        </h5>
                                                                                                        <ul  className="d-flex flex-wrap">
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                    monday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                    tuesday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Wednesday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Thursday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Friday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Saturday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Sunday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                            
                                                                                                        </ul>
                                                                                                        <h5 className=" side-title">
                                                                                                            Days range
                                                                                                        </h5>
                                                                                                        <form className='mt-2 d-flex'>
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>      
                                                                                                            <div className='d-flex position-relative w-50'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">To</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl"></ion-icon>
                                                                                                            </div>     
                                                                                                        </form>
                                                                                                        <h5 className="   side-title">
                                                                                                            Appointment Time
                                                                                                        </h5>
                                                                                                        <form className=" mt-2 d-flex ">
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>         
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>    
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>    
                                                                                                        </form>
                                                                                                        <button className="button w-100">
                                                                                                            ADD
                                                                                                        </button>
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <button className="li-list">
                                                                                                                    <span>
                                                                                                                    31/01/21 to 20/02/21
                                                                                                                    </span>
                                                                                                                    <ion-icon name="trash-outline" role="img" className="font-18 pl-1 md hydrated" aria-label="trash outline">
                                                                                                                    </ion-icon>
                                                                                                                </button>
                                                                                                            </li>
                                                                                            
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-sm-12">
                                                                                                    <div className="col-sm-6">
                                                                                                        <img src="assets/img/Screenshot5.png" alt="" className="  mt-5 rounded" />
                                                                                                        <button className="button w-100 mt-5 mb-2">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div className="col-sm-6">
                                                                                                        <button className="button iiu-btn">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <button className="button bg-gray-o mb-2" >
                                                                                                            ADD VIDEO
                                                                                                        </button>
                                                                                                        <div className="d-flex">
                                                                                                    
                                                                                                            <button className="button v-add">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                            <button className="button v-sa-add">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                        </div>
                                                                                                        <button className="button iiu-btn mt-0">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <button className="button iiu-btn mt-0">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <button className="button iiu-btn mt-0">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <div className="d-flex">
                                                                                                    
                                                                                                            <button className="button v-add ml-2 ">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                            <button className="button v-sa-add">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                        </div>
                                                                                                
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="modal-footer">
                                                                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                                                </div>

                                                                                            </div>

                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>

                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                            </div>

                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            
                                                            <div className='col-md-8 px-2'>
                                                                <div className=''>
                                                                    <Carousel
                                                                        /*
                                                                        swipeable={false}
                                                                        draggable={false}
                                                                        */
                                                                        responsive={responsive}
                                                                        
                                                                        infinite={true}
                                                                        
                                                                        containerClass="first-carousel-container container"
                                                                        deviceType={props.deviceType}
                                                                        >
                                                                        {images.map(card => {
                                                                            return <div className=" px-2">
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
                                                                                            <button  className='button w-50'>
                                                                                                EDIT
                                                                                            </button>
                                                                                            <button   className='button w-50'>
                                                                                                DELETE
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>;
                                                                        })}
                                                                    </Carousel>
                                                                </div>
                                                            </div>

                                                        </div>


                                                        <div className="mt-5">
                                                            <div className="col-xs-12">
                                                                <h5 className="side-title text-left">
                                                                    In Person
                                                                </h5>
                                                                <p className="yu-udp ">
                                                                    Monday - Friday 9am - 6pm <span className="ml-2"><Link to="">edit availability description</Link></span>
                                                                </p>
                                                            </div>
                                                            <div className="col-md-4 px-2">
                                                                <button type="button" className='m-b-none' data-toggle="modal" data-target="#myModal-4">
                                                                    <img src="assets/img/Screenshot-2.png" className="w-100 pmpi-s " alt=""/>
                                                                </button>
                                                                <div className="modal fade" id="myModal-4" role="dialog">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">

                                                                            <div className="col-sm-12">
                                                                                <div className="form__img">
                                                                                    <h2>Add an online course</h2>
                                                                                    <h5 className=" side-title">
                                                                                        Course title
                                                                                    </h5>
                                                                                    <input type="text" placeholder="Title"/>
                                                                                    <h5 className=" side-title">
                                                                                        Course description
                                                                                    </h5>
                                                                                    <input type="text" placeholder="Description"/>
                                                                                    <h5  className="  side-title">
                                                                                        minutes
                                                                                    </h5>
                                                                                    <input type="text" placeholder="Description"/>
                                                                                    <h5  className="  side-title">
                                                                                        Price
                                                                                    </h5>
                                                                                    <input type="text" placeholder="10 £"/>
                                                                                    <h5 className=" font-25 mb-1 font-weight-light">
                                                                                        Tags
                                                                                    </h5>
                                                                                    <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className='m-2'>
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>
                                                                                        <h5 className=" font-25 mb-1 font-weight-light">
                                                                                            Products used
                                                                                        </h5>
                                                                                        <div className="position-relative">
                                                                                            <input type="text" placeholder="Search..." className="border-20" />
                                                                                            <ion-icon name="search-outline"  role="img" className="search-input md hydrated" aria-label="search outline">
                                                                                            </ion-icon>
                                                                                        </div>
                                                                                        <ul className="d-flex flex-wrap border-bottom pb-3 ">
                                                                                            <li className='m-2'>
                                                                                                <button className="btn d-flex ppiYbj" >
                                                                                                    <span>
                                                                                                        Loréal Dark Lashes
                                                                                                    </span>
                                                                                                    <ion-icon
                                                                                                        name="checkmark-outline"
                                                                                                
                                                                                                        role="img"
                                                                                                        className="md hydrated font-18 pl-1"
                                                                                                        aria-label="checkmark outline">
                                                                                                    </ion-icon>
                                                                                                </button>
                                                                                            </li>

                                                                                        </ul>

                                                                                        <button className="button profile-buottn bg-gray-o" data-toggle="modal" data-target="#myModal-3" >
                                                                                            ADD VIDEO
                                                                                        </button>

                                                                                
                                                                                    <div className="modal fade" id="myModal-5" role="dialog">
                                                                                        <div className="modal-dialog">
                                                                                            <div className="modal-content">

                                                                                                <div className="col-sm-7">
                                                                                                    <div className="form__img">
                                                                                                        <h2>Foundation 101</h2>
                                                                                                        <button className="button iiu-btn" >SECURITY</button>
                                                                                                        <h5 className="  sub-title">
                                                                                                            Days of the week
                                                                                                        </h5>
                                                                                                        <ul  className="d-flex flex-wrap">
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                    monday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                    tuesday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Wednesday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Thursday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Friday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer" htmlFor="flexCheckDefault" >
                                                                                                                        Saturday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <div className="form-check d-flex mr-3">
                                                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                                                                    <label className="form-check-label brand-customer " htmlFor="flexCheckDefault" >
                                                                                                                        Sunday
                                                                                                                    </label>
                                                                                                                </div>
                                                                                                            </li>
                                                                            
                                                                                                        </ul>
                                                                                                        <h5 className=" side-title">
                                                                                                            Days range
                                                                                                        </h5>
                                                                                                        <form className='mt-2 d-flex'>
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>      
                                                                                                            <div className='d-flex position-relative w-50'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">To</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl"></ion-icon>
                                                                                                            </div>     
                                                                                                        </form>
                                                                                                        <h5 className="   side-title">
                                                                                                            Appointment Time
                                                                                                        </h5>
                                                                                                        <form className=" mt-2 d-flex ">
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>         
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>    
                                                                                                            <div className='d-flex position-relative w-50 mr-2'>  
                                                                                                                <label htmlFor="cars" type="date" className="sadiu-s">From</label>
                                                                                                                <select id="cars" className="car-er" name="cars">
                                                                                                                <option value="volvo">dd/mm/yy</option>
                                                                                                                <option value="saab">Saab</option>
                                                                                                                <option value="fiat">Fiat</option>
                                                                                                                <option value="audi">Audi</option>
                                                                                                                </select>
                                                                                                                <ion-icon name="chevron-down-outline" className="car-irl "></ion-icon>
                                                                                                            </div>    
                                                                                                        </form>
                                                                                                        <button className="button w-100" >
                                                                                                            ADD
                                                                                                        </button>
                                                                                                        <ul>
                                                                                                            <li>
                                                                                                                <button className="li-list">
                                                                                                                    <span>
                                                                                                                    31/01/21 to 20/02/21
                                                                                                                    </span>
                                                                                                                    <ion-icon name="trash-outline" role="img" className="font-18 pl-1 md hydrated" aria-label="trash outline">
                                                                                                                    </ion-icon>
                                                                                                                </button>
                                                                                                            </li>
                                                                                            
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-sm-12">
                                                                                                    <div className="col-sm-6">
                                                                                                        <img src="assets/img/Screenshot5.png" alt="" className="  mt-5 rounded" />
                                                                                                        <button className="button w-100 mt-5 mb-2">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div className="col-sm-6">
                                                                                                        <button className="button iiu-btn">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <button className="button bg-gray-o mb-2" >
                                                                                                            ADD VIDEO
                                                                                                        </button>
                                                                                                        <div className="d-flex">
                                                                                                    
                                                                                                            <button className="button v-add">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                            <button className="button v-sa-add">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                        </div>
                                                                                                        <button className="button iiu-btn mt-0">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <button className="button iiu-btn mt-0">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <button className="button iiu-btn mt-0">
                                                                                                            SECURITY
                                                                                                        </button>
                                                                                                        <div className="d-flex">
                                                                                                    
                                                                                                            <button className="button v-add ml-2 ">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                            <button className="button v-sa-add">
                                                                                                                ADD VIDEO
                                                                                                            </button>
                                                                                                        </div>
                                                                                                
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="modal-footer">
                                                                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                                                </div>

                                                                                            </div>

                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>




                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                            </div>





                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            
                                                            <div className='col-md-8 px-2'>
                                                                <div className=''>
                                                                <Carousel
                                                                    /*
                                                                    swipeable={false}
                                                                    draggable={false}
                                                                    */
                                                                    responsive={responsive}
                                                                    
                                                                    infinite={true}
                                                                    
                                                                    containerClass="first-carousel-container container"
                                                                    deviceType={props.deviceType}
                                                                    >
                                                                    {images.map(card => {
                                                                        return <div className=" px-2">
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
                                                                                        <button  className='button w-50'>
                                                                                            EDIT
                                                                                        </button>
                                                                                        <button   className='button w-50'>
                                                                                            DELETE
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>;
                                                                    })}
                                                                    </Carousel>
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
                        </div>

                    </div>

                    <Subscribe/>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}

export default Profile;
