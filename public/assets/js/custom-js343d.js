function megaMenu(){jQuery(window).width()<992?jQuery("body:not(.rtl) .header_2 #tt-megamenu .tt_menus_ul>.tt_menu_item>.tt_sub_menu_wrap").each((function(){jQuery(this).css("margin-right",+0+"px")})):jQuery("body:not(.rtl) .header_2 .menu_wrapper #tt-megamenu .tt_menus_ul>.tt_menu_item>.tt_sub_menu_wrap").each((function(){var e=jQuery(".main-header").offset();var t;var o;jQuery(this).parent().offset().left+jQuery(this).outerWidth()-(e.left+jQuery(".main-header").outerWidth())>0&&jQuery(this).css("margin-left","0")}))}function userinfo(){jQuery(window).width()<=991?(jQuery(".header_3 .customer_account").appendTo(".header_3 .header-icons-wrap .myaccount"),jQuery(".header_1 .header_currency").insertAfter(".header_1 #shopify-section-TT-megamenu .tt_menus_ul"),jQuery(".header_1 .header_language").insertAfter(".header_1 #shopify-section-TT-megamenu .tt_menus_ul")):(jQuery(".header_3 .header-icons-wrap .myaccount .customer_account ").insertAfter(".header_3_wrapper"),jQuery(".header_1 .header_currency").insertBefore(".header_1 .header-logo"),jQuery(".header_1 .header_language").insertBefore(".header_1 .header-logo"))}function footercolumn(){$(document).width()<=991?jQuery("#shopify-section-footer-model-3 .footer-bottom .footer-column").insertAfter("#shopify-section-footer-model-3 .footer-column.contactus"):$(document).width()>=992&&jQuery("#shopify-section-footer-model-3 .footer-column.links").insertBefore("#shopify-section-footer-model-3 .footer-bottom .copyright")}function responsiveMenu(){jQuery(window).width()<992?(jQuery("#shopify-section-TT-megamenu").insertAfter(".main-header .menu_toggle_wrap .nav-toggle"),jQuery(".sub-nav__dropdown").css("display","none"),jQuery("body.left-menu .header_3 .header-logo").insertAfter(".header_3 .menu_toggle_wrap"),jQuery("body .header_3 .social-follow-us").insertAfter(".header_3 .tt_menus_ul"),jQuery(".header_1 .header_1_wrapper .icons_wrap_div").appendTo(".logo-header")):(jQuery(".header_style_2 #shopify-section-TT-megamenu").prependTo(".header_2 .menu_wrapper"),jQuery(".header_style_3 #shopify-section-TT-megamenu").prependTo(".header_style_3 .menu_wrapper"),jQuery("body.left-menu .header_3 .header-logo").insertBefore(".header_3 .tt-mega_menu"),jQuery("body .header_3 .social-follow-us").insertAfter(".header_3 .tt-mega_menu"),jQuery(".header_1 .header_1_wrapper .logo-header .icons_wrap_div").insertBefore(".menu-icons .fixed-cart-wrap"),jQuery(".header_style_1 #shopify-section-TT-megamenu").appendTo(".header_1 .menu_wrapper"))}function productcartsticky(){jQuery(window).width()>319&&jQuery(this).scrollTop()>550?jQuery(".add-to-cart-sticky").addClass("fixed"):jQuery(".add-to-cart-sticky").removeClass("fixed")}function footerToggle(){if(jQuery(window).width()<992)(jQuery("body").hasClass("footer_style_2")||jQuery("body").hasClass("footer_style_3"))&&(jQuery(".site-footer").hasClass("fixed_footer")&&jQuery(".page-wrapper").css("margin-bottom","0px"),jQuery(".site-footer .footer-column h5").addClass("toggle"),jQuery(".site-footer .footer-column").children(":nth-child(2)").css("display","none"),jQuery(".site-footer .footer-column.contactus").children(":nth-child(3)").css("display","none"),jQuery(".site-footer .footer-column.active").children(":nth-child(2)").css("display","block"),jQuery(".site-footer .footer-column h5.toggle").unbind("click"),jQuery(".site-footer .footer-column h5.toggle").on("click",(function(){jQuery(this).parent().toggleClass("active").children(":nth-child(2),:nth-child(3)").slideToggle("fast")}))),jQuery(".left-sidebar.sidebar").insertAfter(".collection_wrapper"),jQuery(".sidebar .collection_sidebar .sidebar-block").insertAfter(".filter-wrapper"),jQuery(".right-sidebar.sidebar .widget > h4,.left-sidebar.sidebar .widget > h4,.blog-section .sidebar .widget > h4").addClass("toggle"),jQuery(".right-sidebar.sidebar .widget,.left-sidebar.sidebar .widget,.blog-section .sidebar .widget").children(":nth-child(2)").css("display","none"),jQuery(".right-sidebar.sidebar .widget.active,.left-sidebar.sidebar .widget.active,.blog-section .sidebar .widget.active").children(":nth-child(2)").css("display","block"),jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").unbind("click"),jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").on("click",(function(){jQuery(this).parent().toggleClass("active").children(":nth-child(2)").slideToggle("fast")})),jQuery(".collection_right .sidebar-block .widget > h4,.collection_left .sidebar-block .widget > h4,.filter-toggle-wrap .sidebar-block .widget > h4").addClass("toggle"),jQuery(".collection_right .sidebar-block .widget,.collection_left .sidebar-block .widget,.filter-toggle-wrap .sidebar-block .widget ").children(":nth-child(2)").css("display","none"),jQuery(".collection_right .sidebar-block .widget.active,.collection_left .sidebar-block .widget.active,.filter-toggle-wrap .sidebar-block .widget.active").children(":nth-child(2)").css("display","block"),jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").unbind("click"),jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").on("click",(function(){jQuery(this).parent().toggleClass("active").children(":nth-child(2)").slideToggle("fast")}));else{if(jQuery(".sidebar-block").prependTo(".collection_sidebar"),jQuery(".site-footer").hasClass("fixed_footer")){var e=jQuery(".site-footer.fixed_footer").height();jQuery(".page-wrapper").css("margin-bottom",e+"px")}jQuery(".left-sidebar.sidebar").insertBefore(".collection_wrapper"),jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").unbind("click"),jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").removeClass("toggle"),jQuery(".sidebar .widget,.sidebar-block .widget").children(":nth-child(2)").css("display","block"),jQuery(".site-footer .footer-column h5").unbind("click"),jQuery(".site-footer .footer-column h5").removeClass("toggle"),jQuery(".site-footer .footer-column").children(":nth-child(2)").css("display","block"),jQuery(".site-footer .footer-column.contactus").children(":nth-child(3)").css("display","block")}}function splitStr(e,t){return e.split(t)}function countDownIni(e){$(e).each((function(){var e=$(this);var t;e.attr("data-promoperiod")?t=(new Date).getTime()+parseInt(e.attr("data-promoperiod"),10):e.attr("data-countdown")&&(t=e.attr("data-countdown")),Date.parse(t)-Date.parse(new Date)>0&&($(this).addClass("countdown-block"),e.countdown(t,(function(t){e.html(t.strftime('<span><span class="left-txt">LEFT</span><span>%D</span><span class="time-txt">DAYS</span></span>'+'<span><span>%H</span><span class="time-txt">HRS</span></span>'+'<span><span>%M</span><span class="time-txt">MIN</span></span>'+'<span><span class="second">%S</span><span class="time-txt">SEC</span></span>'))})))}))}function hb_animated_contents(){$(".hb-animate-element:in-viewport").each((function(e){var t=$(this);t.hasClass("hb-in-viewport")||setTimeout((function(){t.addClass("hb-in-viewport")}),180*e)}))}function sidebarsticky(){$(document).width()<=1199?jQuery(".left-sidebar.sidebar,.right-sidebar.sidebar.collection_right,.collection_left").theiaStickySidebar({additionalMarginBottom:30,additionalMarginTop:30}):$(document).width()>=1200&&jQuery(".left-sidebar.sidebar,.right-sidebar.sidebar,.collection_right,.collection_left").theiaStickySidebar({additionalMarginBottom:30,additionalMarginTop:130})}$(document).ready((function(){jQuery("#GotoTop").on("click",(function(){return jQuery("html, body").animate({scrollTop:0},"1000"),!1})),jQuery(".nav-toggle").click((function(e){jQuery(this).toggleClass("active"),e.stopPropagation(),jQuery(" #tt-megamenu .tt-mega_menu").slideToggle("2000"),jQuery("body").toggleClass("open-header")})),jQuery("#tt-megamenu .tt-mega_menu").on("click",(function(e){e.stopPropagation(),jQuery(this).removeClass("active")})),jQuery(".header_2 .tt-megamenu .tt_menus_ul .tt_menu_item").hover((function(){jQuery("body").addClass("open-nav")}),(function(){jQuery("body").removeClass("open-nav")})),jQuery("#tt-megamenu .tt-mega_menu").hover((function(){jQuery("body").addClass("menu_hover")}),(function(){jQuery("body").removeClass("menu_hover")})),jQuery(".filter-toggle").on("click",(function(e){e.preventDefault(),jQuery(this).toggleClass("active"),jQuery(".filter-toggle-wrap").slideToggle("is-visible")}));var t=jQuery(this).find(".full_width .sorting_wrapper");jQuery(this).find(".filter-toggle").insertBefore(t),jQuery(".product-single__thumbs img").on("click",(function(){var e=jQuery(this).attr("src");""!=e&&jQuery(this).closest(".product-wrapper").find("img.grid-view-item__image").first().attr("src",e),jQuery(this).parent(".grid-item").addClass("open").siblings(".grid-item").removeClass("open")}));var o=jQuery(".popup_overlay");function r(e){var t;var o=document.getElementById("popupVid").getElementsByTagName("iframe")[0].contentWindow;func="hide"==e?"pauseVideo":"playVideo",o.postMessage('{"event":"command","func":"'+func+'","args":""}',"*")}jQuery("#popup_toggle").click((function(){jQuery("body").addClass("popup-toggle"),o.css("display","block")})),o.click((function(t){e=t||window.event,e.target==this&&(jQuery(o).css("display","none"),jQuery("body").removeClass("popup-toggle"))})),jQuery(".popup_close,.homeslider ul.slick-slider .slick-arrow").click((function(){o.css("display","none"),jQuery("body").removeClass("popup-toggle")})),jQuery("#popup_toggle, .homeslider ul.slick-slider .slick-arrow").click((function(){o.css("visibility","visible").css("opacity","1")})),o.click((function(t){e=t||window.event,e.target==this&&(jQuery(o).css("visibility","hidden").css("opacity","0"),r("hide"))})),jQuery(".popup_close").click((function(){o.css("visibility","hidden").css("opacity","0"),r("hide")})),jQuery(".checkout-btn .shopify-payment-button").addClass("btn"),jQuery(".header_1 .wrapper-wrap").hasClass("logo_center")&&jQuery("body").addClass("logo_center");var s=$(window).width();$(".slider-content-main-wrap").css("width",s),$(".site-header").hasClass("header_transaparent")&&$("body.template-index").addClass("header_transaparent");var i=jQuery(".product-single__thumbs .slick-active.slick-current").find(".product-single__thumb").data("id");jQuery(".product-lightbox-btn").hasClass(i)&&jQuery(".product-lightbox-btn."+i).show(),jQuery(".filter-left").on("click",(function(e){e.preventDefault(),jQuery(this).toggleClass("active"),jQuery(".off-canvas.position-left").addClass("is-open"),jQuery(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible is-closable")})),jQuery(".filter-right").on("click",(function(e){e.preventDefault(),jQuery(this).toggleClass("active"),jQuery(".off-canvas.position-right").addClass("is-open"),jQuery(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible is-closable")})),jQuery(".off-canvas .sidebar_close").on("click",(function(e){e.preventDefault(),jQuery(".off-canvas.position-left").removeClass("is-open"),jQuery(".off-canvas.position-right").removeClass("is-open"),jQuery(".js-off-canvas-overlay.is-overlay-fixed").removeClass("is-visible is-closable")})),jQuery(".is-overlay-fixed").on("click",(function(e){e.preventDefault(),jQuery(".filter-left").trigger("click"),jQuery(".filter-right").trigger("click"),jQuery(".off-canvas.position-left").removeClass("is-open"),jQuery(".off-canvas.position-right").removeClass("is-open"),jQuery(".js-off-canvas-overlay.is-overlay-fixed").removeClass("is-visible is-closable")})),$(".product-360-button a").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160,disableOn:!1,preloader:!1,fixedContentPos:!1,callbacks:{open:function(){$(window).resize()}}}),countDownIni(".flip-countdown,.js-flip-countdown"),$(".popup-video").magnificPopup({disableOn:300,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),($("a.product-lightbox-btn").length>0||$("a.product-video-popup").length>0)&&$(".product-single__photos .gallery,.design_2 .product-img").magnificPopup({delegate:"a",type:"image",tLoading:'<div class="please-wait dark"><span></span><span></span><span></span></div>',removalDelay:300,closeOnContentClick:!0,gallery:{enabled:!0,navigateByImgClick:!1,preload:[0,1]},image:{verticalFit:!1,tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'},callbacks:{beforeOpen:function(){var e=$(".product-video-popup").attr("href");if(e){this.st.mainClass="has-product-video";var t=$.magnificPopup.instance;t.items.push({src:e,type:"iframe"}),t.updateItemHTML()}},open:function(){}}}),$(".design_3 .product-img,.design_5 .pro_img").magnificPopup({delegate:"a",type:"image",tLoading:'<div class="please-wait dark"><span></span><span></span><span></span></div>',removalDelay:300,closeOnContentClick:!0,gallery:{enabled:!0,navigateByImgClick:!1,preload:[0,1]},image:{verticalFit:!1,tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'},callbacks:{beforeOpen:function(){var e=$(".product-video-popup").attr("href");if(e){this.st.mainClass="has-product-video";var t=$.magnificPopup.instance;t.items.push({src:e,type:"iframe"}),t.updateItemHTML()}},open:function(){}}}),$("body").on("click",".product-lightbox-btn",(function(e){$(".product-wrapper-owlslider").find(".owl-item.active a").click(),e.preventDefault()})),$(".qtyplus").on("click",(function(e){e.preventDefault();var t=jQuery(this).parents(".qty-box-set").find(".quantity");var o=parseInt(jQuery(this).parents(".qty-box-set").find(".quantity").val());var r=jQuery(".cart-update .quantity").data("item-id");isNaN(o)?jQuery(this).parents(".qty-box-set").find(".quantity").val(1):jQuery(this).parents(".qty-box-set").find(".quantity").val(o+1)})),$(".qtyminus").on("click",(function(e){e.preventDefault();var t=jQuery(this).parents(".qty-box-set").find(".quantity");var o=parseInt(jQuery(this).parents(".qty-box-set").find(".quantity").val());!isNaN(o)&&o>1?jQuery(this).parents(".qty-box-set").find(".quantity").val(o-1):jQuery(this).parents(".qty-box-set").find(".quantity").val(1)})),$("#navToggle").on("click",(function(e){jQuery(this).next(".Site-navigation").slideToggle(500)})),$(".menu_toggle_wrap #navToggle").on("click",(function(e){jQuery(this).parent().next(".Site-navigation").slideToggle(500)})),jQuery("body.footer_style_1 .footer_toggle").on("click",(function(e){jQuery("#shopify-section-footer-model-1").addClass("toggle-footer"),jQuery("body").addClass("footer1-open"),e.preventDefault()})),jQuery("body.footer_style_1 .footer_close_toggle").on("click",(function(e){jQuery("#shopify-section-footer-model-1").removeClass("toggle-footer"),jQuery("body").removeClass("footer1-open"),e.preventDefault()})),jQuery(window).width()>=992&&jQuery(".header_1 .fullscreen_header_toggle").on("click",(function(e){jQuery(this).toggleClass("active"),jQuery("body").toggleClass("fullnav-open header_1"),e.preventDefault()})),jQuery(".header_3 .fullscreen_header_toggle").on("click",(function(e){e.preventDefault(),jQuery(this).toggleClass("active"),jQuery("#tt-megamenu").toggleClass("active"),jQuery(".fullscreen_header").toggleClass("nav-open"),jQuery("body").toggleClass("fullnav-open header_3")})),jQuery(".site-header__search.search-full .serach_icon").on("click",(function(e){e.preventDefault(),jQuery(this).toggleClass("active"),jQuery("body").toggleClass("search_full_active"),jQuery(".full-search-wrapper").addClass("search-overlap"),jQuery(".header_3 .search-full-screen").addClass("active"),jQuery(".myaccount  .dropdown-toggle").removeClass("open"),jQuery(".myaccount  .customer_account").slideUp("fast"),jQuery(".site-header .site-header_cart_link").removeClass("active"),jQuery("#Sticky-slidedown-cart").slideUp("fast"),jQuery("#slidedown-cart").slideUp("fast"),jQuery(".search-bar > input").focus(),jQuery("body").toggleClass("search_toggle"),jQuery("body").removeClass("account-toggle"),jQuery("body").removeClass("cart_toggle")}));jQuery(".site-header__search.search-full .close-search").on("click",(function(){jQuery(".site-header__search.search-full .serach_icon").removeClass("active"),jQuery(".full-search-wrapper").removeClass("search-overlap"),jQuery(".header_3 .search-full-screen").removeClass("active"),jQuery("body").removeClass("search_full_active"),jQuery("body").removeClass("search_toggle")})),jQuery(".site-header__search:not(.search-full) .serach_icon").on("click",(function(){jQuery(".search_wrapper").slideToggle("fast"),jQuery(".search-bar > input").focus(),jQuery(this).toggleClass("active"),jQuery("body").toggleClass("search_toggle"),jQuery(".site-header .site-header_cart_link").removeClass("active"),jQuery(".myaccount  .dropdown-toggle").removeClass("open"),jQuery(".myaccount  .customer_account").slideUp("fast"),jQuery("#slidedown-cart").slideUp("fast"),jQuery("#Sticky-slidedown-cart").slideUp("fast"),jQuery("body").removeClass("account-toggle"),jQuery("body").removeClass("cart_toggle")})),jQuery(".myaccount  span.dropdown-toggle").on("click",(function(e){e.preventDefault(),jQuery(".header_1 .customer_account,.header_2 .customer_account,.header_3 .customer_account").slideToggle("fast"),jQuery(this).toggleClass("open"),jQuery("body").toggleClass("account-toggle"),jQuery(".site-header__search:not(.search-full) .serach_icon").removeClass("active"),jQuery("body").removeClass("search_full_active"),jQuery("body").removeClass("currency-open"),jQuery("body").removeClass("language-open"),jQuery(".site-header .site-header_cart_link").removeClass("active"),jQuery(".site-header .search_wrapper").slideUp("fast"),jQuery("#slidedown-cart").slideUp("fast"),jQuery("#Sticky-slidedown-cart").slideUp("fast"),jQuery("body").removeClass("search_toggle"),jQuery("body").removeClass("cart_toggle")})),$(".header_1 .header_currency .currency_wrapper.dropdown-toggle").on("click",(function(e){e.preventDefault(),jQuery(".customer_account").stop(),jQuery(".currencies.flag-dropdown-menu").slideToggle("fast"),$(this).toggleClass("active"),jQuery("body").toggleClass("currency-open"),jQuery("body").removeClass("language-open"),jQuery(".language.flag-dropdown-menu").slideUp("fast"),$(".header_language .language-block .language_wrapper.dropdown-toggle").removeClass("active")})),$(".header_1 .header_language .language-block .language_wrapper.dropdown-toggle").on("click",(function(e){e.preventDefault(),jQuery(".customer_account").stop(),jQuery(".language.flag-dropdown-menu").slideToggle("fast"),$(this).toggleClass("active"),jQuery("body").removeClass("currency-open"),jQuery("body").toggleClass("language-open"),jQuery(".currencies.flag-dropdown-menu").slideUp("fast"),$(".header_currency .currency_wrapper.dropdown-toggle").removeClass("active")}));var a=jQuery(".slider-specialproduct").data("col");jQuery("body").hasClass("disable_menutoggle")?$("body.disable_menutoggle .slider-specialproduct").owlCarousel({items:a,nav:!1,dots:!0,rewind:!0,responsive:{100:{items:1},319:{items:2},700:{items:3},1200:{items:a}}}):$("body .slider-specialproduct").owlCarousel({items:a,nav:!1,dots:!0,rewind:!0,responsive:{100:{items:1},319:{items:2},700:{items:3},1200:{items:a}}}),$(".slider-specialproduct-wrap").each((function(){$(this).find(".owl-nav").hasClass("disabled")?$(this).find(".customNavigation").hide():$(this).find(".customNavigation").show()})),$(".slider-specialproduct-wrap .customNavigation .next").click((function(){var e=$(this).closest(".slider-specialproduct-wrap");$(e).find(".slider-specialproduct").trigger("next.owl")})),$(".slider-specialproduct-wrap .customNavigation .prev").click((function(){var e=$(this).closest(".slider-specialproduct-wrap");$(e).find(".slider-specialproduct").trigger("prev.owl")}));var n=$("body:not(.rtl) #brands_list_slider");var l=$("body.rtl #brands_list_slider");var c;var c;var d;var u;n.owlCarousel({items:5,dots:!0,rewind:!0,autoplay:!0,autoplayHoverPause:!0,nav:!1,responsive:{100:{items:2},544:{items:3},992:{items:4},1200:{items:5}}}),l.owlCarousel({items:5,dots:!0,rewind:!0,nav:!1,autoplay:!0,autoplayHoverPause:!0,rtl:!0,responsive:{100:{items:2},544:{items:3},992:{items:4},1200:{items:5}}}),$(".brands_next").click((function(){n.trigger("owl.next")})),$(".brands_prev").click((function(){n.trigger("owl.prev")})),$(".brands_next").click((function(){l.trigger("owl.next")})),$(".brands_prev").click((function(){l.trigger("owl.prev")})),$("body:not(.rtl) .ttbanner-right").owlCarousel({items:2,nav:!0,rtl:!0,loop:!0,autoplay:!0,dots:!1,responsive:{100:{items:1},481:{items:2},992:{items:2},1200:{items:2}}}),$("body.rtl .ttbanner-right").owlCarousel({items:2,nav:!0,rtl:!0,loop:!0,autoplay:!0,dots:!1,responsive:{100:{items:1},481:{items:2},992:{items:2},1200:{items:2}}}),$("body:not(.rtl) .offer_cms_slider").owlCarousel({nav:!0,dots:!1,autoplay:!0,rewind:!0,responsive:{100:{items:1},481:{items:2},768:{items:2},992:{items:2},1200:{items:3}}}),$("body.rtl .offer_cms_slider").owlCarousel({nav:!0,rtl:!0,rewind:!0,autoplay:!0,dots:!1,responsive:{100:{items:1},481:{items:2},768:{items:2},992:{items:2},1200:{items:3}}}),$(".cmsoffer").each((function(){$(this).find(".owl-nav").hasClass("disabled")?$(this).find(".customNavigation").hide():$(this).find(".customNavigation").show()})),$(".cmsoffer .customNavigation .next").click((function(){var e=$(this).closest(".cmsoffer");$(e).find(".offer_cms_slider").trigger("next.owl")})),$(".cmsoffer .customNavigation .prev").click((function(){var e=$(this).closest(".cmsoffer");$(e).find(".offer_cms_slider").trigger("prev.owl")})),$(".cmsbannercontent").owlCarousel({items:2,nav:!1,dots:!1,loop:!1,autoplay:!0,responsive:{320:{items:1},481:{items:1},768:{items:2},992:{items:2},1200:{items:2},1400:{items:2}}}),$("body:not(.rtl) .ttcms-banner .ttbanner-wrap").owlCarousel({items:2,nav:!1,dots:!1,loop:!1,autoplay:!0,rtl:!1,responsive:{992:{items:2},600:{items:2},100:{items:1}}}),$("body.rtl .ttcms-banner .ttbanner-wrap").owlCarousel({items:2,nav:!1,dots:!1,loop:!1,autoplay:!0,rtl:!0,responsive:{992:{items:2},600:{items:2},100:{items:1}}}),(c=$("body:not(.rtl) .ttcmsoffer-block .ttcmsoffer-content")).owlCarousel({items:1,dots:!1,loop:!0,nav:!0,rewind:!0,autoplay:!0,autoplayHoverPause:!0,responsive:{100:{items:1},1300:{items:1}}}),(c=$("body.rtl .ttcmsoffer-block .ttcmsoffer-content")).owlCarousel({items:1,dots:!1,loop:!0,nav:!0,rtl:!0,rewind:!0,autoplay:!0,autoplayHoverPause:!0,responsive:{100:{items:1},1300:{items:1}}}),$(".product-thumb .slider-nav").owlCarousel({items:1,dots:!1,loop:!0,nav:!0,rewind:!0,autoplay:!0,autoplayHoverPause:!0,responsive:{100:{items:1},481:{items:1},992:{items:1},1200:{items:1},1300:{items:1}}}),$("body:not(.rtl) #tt-megamenu .list_product_menu_content").owlCarousel({items:3,nav:!0,autoPlay:!0,autoplaySpeed:1e3,stopOnHover:!1,loop:!1,dots:!0,responsive:{768:{items:3},360:{items:2},100:{items:1}}}),$("body.rtl #tt-megamenu .list_product_menu_content").owlCarousel({items:3,nav:!0,autoPlay:!0,autoplaySpeed:1e3,rtl:!0,stopOnHover:!1,loop:!1,dots:!0,responsive:{768:{items:3},360:{items:2},100:{items:1}}}),$(".full_gallery_slider.owl-carousel").on("changed.owl.carousel",(function(e){var t=e.item.index+1-e.relatedTarget._clones.length/2;var o=e.item.count;(t>o||0==t)&&(t=o-t%o),$(".num").html(t+"/"+o)})),$("body:not(.rtl) .full_gallery_slider.owl-carousel").owlCarousel({stagePadding:200,loop:!0,startPosition:0,center:!0,dots:!0,items:1,lazyLoad:!0,nav:!0,responsive:{0:{items:1,stagePadding:60},600:{items:1,stagePadding:150},768:{items:1,stagePadding:180},868:{items:1,stagePadding:250},1800:{items:1,stagePadding:300}}}),$("body.rtl .full_gallery_slider.owl-carousel").owlCarousel({stagePadding:200,loop:!0,startPosition:0,center:!0,dots:!0,items:1,rtl:!0,lazyLoad:!0,nav:!0,responsive:{0:{items:1,stagePadding:60},600:{items:1,stagePadding:150},768:{items:1,stagePadding:180},868:{items:1,stagePadding:250},1800:{items:1,stagePadding:300}}}),$("body:not(.rtl) .tt-testimonial-wrap .testimonials_wrap").owlCarousel({items:1,nav:!1,dots:!0,loop:!1,autoplay:!1,autoplayHoverPause:!0,responsive:{1279:{items:1},100:{items:1}}}),$("body.rtl .tt-testimonial-wrap .testimonials_wrap").owlCarousel({items:1,nav:!1,rtl:!0,dots:!0,autoplay:!1,loop:!1,autoplayHoverPause:!0,responsive:{1279:{items:1},100:{items:1}}}),$("#promo-carousel").owlCarousel({items:1,autoPlay:!1,nav:!1,responsive:{100:{items:1},1200:{items:1}},nav:!0}),$("body:not(.rtl) .category_feature").owlCarousel({nav:!0,dots:!1,autoplay:!1,loop:!0,rewind:!0,center:!0,responsive:{100:{items:1},320:{items:2,center:!1},992:{items:3}}}),$("body.rtl .category_feature").owlCarousel({nav:!0,rtl:!0,loop:!0,rewind:!0,autoplay:!1,center:!0,dots:!1,responsive:{100:{items:1},320:{items:2,center:!1},992:{items:3}}}),$(".category-feature .owl-item").hover((function(){$(".category-feature .owl-item.center").addClass("changeStyle")})),$(".category-feature .owl-item").mouseleave((function(){$(".category-feature .owl-item.center").removeClass("changeStyle")})),$("body:not(.rtl) .widget_top_rated_products .top-products").owlCarousel({items:1,nav:!0,dots:!0,loop:!1,autoplay:!0,rtl:!1,responsive:{1279:{items:1},600:{items:1}}}),$("body.rtl .widget_top_rated_products .top-products").owlCarousel({items:1,nav:!0,dots:!0,loop:!1,autoplay:!0,rtl:!0,responsive:{1279:{items:1},600:{items:1}}}),jQuery(".spr-summary-actions-newreview").on("click",(function(e){e.preventDefault(),jQuery(".spr-content").slideToggle("slow")})),$(".pro_btn.quick-view-wrap > a,.pro_btn.add_tocart form > a").click((function(){$(this).addClass("loading"),setTimeout((function(){$(".pro_btn.quick-view-wrap > a,.pro_btn.add_tocart form > a").removeClass("loading")}),2e3)}));$("#cmsgallery .image-content").owlCarousel({items:7,dots:!1,loop:!1,nav:!0,rewind:!1,autoplay:!1,responsive:{100:{items:1},315:{items:2},396:{items:3},544:{items:4},768:{items:5},992:{items:6},1200:{items:7}}})})),jQuery(document).ready((function(){megaMenu()})),jQuery(window).resize((function(){megaMenu()})),jQuery(window).scroll((function(){var e;jQuery(document).height()>jQuery(window).height()&&(jQuery(window).scrollTop()>100?jQuery("#GotoTop").fadeIn():jQuery("#GotoTop").fadeOut())})),jQuery(document).ready((function(){userinfo()})),jQuery(window).resize((function(){userinfo()})),jQuery(document).ready((function(){footercolumn()})),jQuery(window).resize((function(){footercolumn()})),jQuery(document).ready((function(){responsiveMenu(),jQuery(".product-write-review").on("click",(function(e){e.preventDefault(),$("a[href='#tab-2']").trigger("click"),jQuery("html, body").animate({scrollTop:jQuery(".product_tab_wrapper").offset().top-150},1e3)}))})),jQuery(window).resize((function(){responsiveMenu();var e=$(window).width();$(".slider-content-main-wrap").css("width",e)})),$(document).ready((function(){productcartsticky()})),jQuery(window).resize((function(){productcartsticky()})),jQuery(window).scroll((function(){productcartsticky()})),jQuery(document).ready((function(){footerToggle()})),jQuery(window).resize((function(){footerToggle()})),$(window).scroll((function(){hb_animated_contents()})),$(window).load((function(){hb_animated_contents()})),jQuery(document).ready((function(){sidebarsticky()})),jQuery(window).resize((function(){sidebarsticky()})),$((function(){var e=function(e,t){var o;this.el=e||{},this.multiple=t||!1,this.el.find("li.tt_mm_hassub .mobile-nav__sublist-trigger").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){var t=e.data.el;$this=$(this),$next=$this.next(),$next.slideToggle(),$this.parent().toggleClass("open"),e.data.multiple||t.find("li.tt_mm_hassub .tt_sub_menu_wrap").not($next).slideUp().parent().removeClass("open")};var t=new e($(".tt_menus_ul"),!1)}));
//# sourceMappingURL=/s/files/1/0431/1819/8939/t/2/assets/custom-js.js.map?v=17556867612994108683
