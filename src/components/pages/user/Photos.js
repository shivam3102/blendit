import React from 'react';
import Footer from '../../layouts/Footer';
import Subscribe from '../../page_components/Subscribe';
import Tabs from '../../page_components/Tabs';
import Userdetailsblock from '../../page_components/UserDetailsBlock';

const Photos = () => {
    return (
        <main class="main-content">
           <div className='container mt-5'>
                <h2 class="product-head-title">Learn from Makeup Artists</h2>
                <Userdetailsblock/>
                <Tabs/>
                <Subscribe/>
                <Footer/>
           </div>
        </main>
    );
}

export default Photos;
