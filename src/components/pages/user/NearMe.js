import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import FilterTabs from '../../page_components/FilterTabs';
import SliderText from '../../page_components/SliderText';
import Subscribe from '../../page_components/Subscribe';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const NearMe = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div class="page-wrapper page-element">
            <main class="main-content">
            <div className='container mt-5'>
                    <h2 class="product-head-title">Learn from Makeup Artists</h2>
                    <SliderText/>

                    <FilterTabs/>
                        <div className='row mx-0'>
                            <div className='col-md-6'>
                                <div className=''>
                                    <h5>Select a day</h5>
                                    <Calendar
                                        onChange={onChange}
                                        value={value}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className=''>
                                    <h5 className='mb-0'>Select a time</h5>
                                    <span>Appointment duration: 30 minutes</span>
                                    <button class="button btn-main mt-2 mb-2 ">8:00 AM</button>

                                    <div>
                                        <button class="button btn-booked mt-2 mb-2 ">8:30 AM</button>
                                    </div>

                                    <div>
                                        <button class="button btn-main mt-2 mb-2 ">9:00 AM</button>
                                    </div>

                                    <div><button class="button btn-main mt-2 mb-2 ">9:30 AM</button></div>

                                    <div>
                                        <button class="button btn-main mt-2 mb-2 ">10:00 AM</button>
                                    </div>

                                    <div>
                                        <button class="button btn-main mt-2 mb-2 ">10:30 AM</button>
                                    </div>

                                   <div>
                                    <button class="button btn-booked mt-2 mb-2 ">11:00 AM</button>
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

export default NearMe;
