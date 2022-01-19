import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

const Contactus = () => {
    return (
        <main className="main-content">
            <div className="container">
                <div className="row">
                    <div className="login ">
                        <img src="assets/img/AsanArtist-2.png" alt="" className="artist-2" />
                        <div className="title-up col-sm-6">
                            <h5>
                                Let’s get going with your profile.
                            </h5>
                            <h4>
                                Set your location
                            </h4>
                        </div>
                        <div className="col-sm-12">
                            <div id="shopify-section-google-map" className="shopify-section">
                                <div id="google_map" data-section-id="google-map" data-section-type="map-section">
                                    <div id="map"></div>
                                </div>
                                <div className="contact_d">
                                    <button type="button" className="contact-btn" data-toggle="modal" data-target="#myModal"></button>
                                </div>
                                <div className="modal fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">


                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Where are you based?</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-gup">
                                                    <ion-icon name="location-outline" className="contact-icon"></ion-icon>
                                                    <input type="text" className='pl-5' placeholder="Location…" />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDS1A1NkVZlfNpumO5nQlAPEKFjyxcvuWs"></script>
                            </div>
                            <button className="btn col-sm-6">
                                SIGN UP - IT’S FREE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    );
}

export default Contactus;
