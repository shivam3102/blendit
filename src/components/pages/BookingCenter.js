import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCenter = () => {
    const [value, onChange] = useState(new Date());
    return (
        <React.Fragment>
            <main className="main-content">

                <div className="container">
                    <div className="row">
                        <div>
                            <div className="col-xs-12">
                                <h5 className="head-title">
                                    Booking centre
                                </h5>

                            </div>

                           <div className='row '>
                                <div className='col-md-4'>
                                <Calendar
                                        onChange={onChange}
                                        value={value}
                                    />
                                </div>
                                <div className='col-md-8'>
                                    <div className='row mx-0'>
                                            <div className="card-div col-md-6 mx-0 p-4">
                                                <h5 className="font-24">
                                                    “1 on 1” Perfect Tone
                                                </h5>
                                                <p className="pb-2 font-14">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                                                </p>
                                                <span className="font-20">
                                                    45 minutes
                                                    <span className="text-c">
                                                        £25
                                                    </span>
                                                </span>
                                                <div className="d-flex pt-4 ">
                                                    <button className="button w-50">
                                                        EDIT
                                                    </button>
                                                    <button className="btn-black button w-50">
                                                        DELETE
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                                <div>
                                                    <h5 className="side-title ">
                                                        9:30am <br/>
                                                        Martina Altman
                                                    </h5>
                                                    <ul className='list-unstyled booking-timing d-flex flex-wrap justify-content-between'>
                                                        <li>
                                                                <span>Contact </span>
                                                        </li>
                                                        <li>
                                                                <span>Cancel </span>
                                                        </li>
                                                        <li>
                                                                <span>Change time/date </span>
                                                        </li>
                                                    </ul>
                                                   
                                                    <h5 className="side-title">
                                                        11:30am <br/>
                                                        Sam Bisonette
                                                    </h5>
                                                    <ul className='list-unstyled booking-timing d-flex flex-wrap justify-content-between'>
                                                        <li>
                                                                <span>Contact </span>
                                                        </li>
                                                        <li>
                                                                <span>Cancel </span>
                                                        </li>
                                                        <li>
                                                                <span>Change time/date </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default BookingCenter;
