import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeBlendit = () => {
    return (
        <div className="App page-wrapper page-element">
        
        <main className="main-content">
            <img src="assets/img/side-img.png" className="side-img" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="login col-sm-8">
                        <div className="title-up">
                            <h4>
                            Welcome to Blendit
                            </h4>
                            
                            <div className='col-md-8'>
                                <div className='mt-3'>
                                    <p className='font-16'>Blend It is a platform as well as a community of artists here to share their expertise with blogs, tutorials and online bookings to keep you feeling great!</p>
                                </div>
                                
                                <div className="sign ">
                                
                                    <Link to="/user-register" className="button">
                                    
                                            SIGN UP
                                
                                    </Link>
                                
                                <div className='mt-2'>
                                    <span>
                                            Already have an account?
                                            <Link to="/login" className='font-weight-bold'> Sign in</Link>
                                        </span>
                                </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </main>
        {/* <div className="clearfix" id="quickview-template" style={{'display':'none'}}>
            <div className="overlay"></div>
            <div className="content clearfix">
                <div className="quick-shop-modal-bg">
                    <div className="quickloader">
                        <div className="spinner"></div>
                    </div>
                </div>
                <a href="javascript:void(0)" className="close-window"></a>
                <div className="product-img images col-xs-12 col-sm-5">
                    <div className="quickview-featured-image product-photo-container"></div>
                    <div className="more-view-wrapper">
                        <ul className="product-photo-thumbs product-wrapper-owlslider owl-carousel owl-theme ">
                        </ul>
                    </div>
                </div>
                <div className="product-shop summary col-xs-12 col-sm-7">
                    <div className="product-item product-detail-section">
                        <h2 className="product-title"><a>&nbsp;</a></h2>
                        <p className="item-text product-description"></p>
                        <div className="prices product_price product-price__price">
                            <span className="price h2 money" id="QProductPrice" data-currency-usd=""></span>
                            <span className="compare-price product-price__price compare_price" id="QComparePrice"></span>
                            <div className="pro_price"></div>
                        </div>

                        <div className="product-info">
                            <p className="product-inventory"><label>Availability :</label><span></span></p>
                        </div>
                        <div className="details clearfix">
                            <form action="https://theme-shade.myshopify.com/cart/add" method="post" className="variants">
                                <select name="id" style={{'display':'none'}}></select>
                                <div className="grid--uniform product-single__addtocart">
                                    <div className="qty-section quantity-box">
                                        <label>Quantity</label>
                                        <div className="qty-box-set">
                                            <input type="number" name="quantity" id="Quick-Qty" value="1" min="1" className="quantity"/>
                                            <div className="qnt_wrap">
                                                <div className="inc button qtyplus"><i className="mdi mdi-plus"></i></div>
                                                <div className="dec button qtyminus"><i className="mdi mdi-minus"></i></div>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <button type="button" className="add-to-cart-btn btn">

                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div> */}
        </div>
    );
}

export default WelcomeBlendit;
