import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import SliderText from '../../page_components/SliderText';
import Subscribe from '../../page_components/Subscribe';
import Tabs from '../../page_components/Tabs';

const NearMe = () => {
    return (
        <main class="main-content">
           <div className='container mt-5'>
                <h2 class="product-head-title">Learn from Makeup Artists</h2>
                <SliderText/>

                <Tabs/>
                <Subscribe/>
                <Footer/>
           </div>
        </main>
    );
}

export default NearMe;
