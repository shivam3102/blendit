import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="shopify-section-header-model-2" className="shopify-section">
            <header class="site-header page-element header_2 " data-section-id="header-model-2" data-section-type="header">
                <div class="wrapper-wrap logo_left menu_center">
                    <div class="container nav-menu-wrap sticky_header">
                        <div class="main-header">
                            <div class="header-logo">
                                <div class="container-fluid">

                                    <Link to="index.html">
                                        <img src="assets/img/main-logo.png" alt="theme-shade" title="theme-shade"/>
                                    </Link>

                                </div>
                            </div>
                            <div class="menu_wrapper">

                                <div id="shopify-section-TT-megamenu" class="shopify-section tt-mega-menu">
                                    <div id="tt-megamenu" class="tt-megamenu">
                                        <div class="tt-mega_menu">
                                            <ul class="tt_menus_ul">
                                                {/* <li class="tt_menu_item full tt_mm_hassub">
                                                    <Link to="profile.html">
                                                        <span class="tt_menu_item_heading_title">
                                                            My profile
                                                        </span>
                                                    </Link>
                                                </li> */}
                                                <li class="tt_menu_item full tt_mm_hassub">
                                                    <Link to="profile">
                                                        <span class="tt_menu_item_heading_title">
                                                            My products
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li class="tt_menu_item full tt_mm_hassub">
                                                    <Link to="/about">
                                                        <span class="tt_menu_item_heading_title">
                                                            Aboutus
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li class="tt_menu_item full tt_mm_hassub">
                                                    <Link to="/contactus">
                                                        <span class="tt_menu_item_heading_title">
                                                          Contact
                                                        </span>
                                                    </Link>
                                                </li>
                                                
                                                
                                                <li class="tt_menu_item full tt_mm_hassub">
                                                    <Link to="/login">
                                                        <span class="tt_menu_item_heading_title">
                                                            Login
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li class="tt_menu_item full tt_mm_hassub">
                                                    <Link to="/register">
                                                        <span class="tt_menu_item_heading_title">
                                                            Register
                                                        </span>
                                                    </Link>
                                                </li>
                                              
                                                <li class="more_menu tt_menu_item left">
                                                <Link to="#"><span class="tt_menu_item_heading_title">MORE<span></span></span></Link>
                                                <ul class="tt_sub_menu_linklist tt_sub_menu_wrap ml-0">
                                                <li id="menu--1546336998226" class="tt_menu_item left tt_mm_hassub">
                                                    <Link to="/profile">
                                                        <span class="tt_menu_item_heading_title">
                                                            My profile
                                                        </span>
                                                    </Link>

                                                    <Link to="account" class="b-1 ">
                                                        <span class="tt_menu_item_heading_title">
                                                            My account
                                                        </span>
                                                    </Link>
                                                    <Link to="#" class="c-1">
                                                        <span class="tt_menu_item_heading_title">
                                                            Customer bookings
                                                        </span>
                                                    </Link>
                                                    <Link to="#">
                                                        <span class="tt_menu_item_heading_title">
                                                         Log out
                                                        </span>
                                                    </Link>
                                                    <div class="tt_sub_menu_wrap c-1 w-0" ></div>
                                                </li></ul></li>
                                                {/* <li id="menu--1546336998226" class="tt_menu_item left tt_mm_hassub">
                                                    <Link to="#">
                                                        <span class="tt_menu_item_heading_title">
                                                            My profile
                                                        </span>
                                                    </Link>

                                                    <Link to="#" className="border-top border-bottom">
                                                        <span class="tt_menu_item_heading_title">
                                                            My account
                                                        </span>
                                                    </Link>
                                                    <Link to="#" className="border-bottom">
                                                        <span class="tt_menu_item_heading_title">
                                                            Customer bookings
                                                        </span>
                                                    </Link>
                                                    <Link to="#">
                                                        <span class="tt_menu_item_heading_title">
                                                         Log out
                                                        </span>
                                                    </Link>
                                                    <div class="tt_sub_menu_wrap w-0" ></div>
                                                </li> */}
                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="menu_toggle_wrap">
                                <button type="button" class="text-link nav-toggle" id="navToggle" aria-label="Menu">
                                    <ion-icon name="menu-outline" className="font-28 text-white"></ion-icon>
                                    <span class="menu-text">Menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
