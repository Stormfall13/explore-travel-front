import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__wrapp-main">
            <div className="footer__wrapp-top">
                <div className="footer__left-content">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <p>
                        Plan and book your perfect trip with 
                        expert advice, travel tips destination
                        information from us
                    </p>
                    <p className="copyright">
                        ©2020 Thousand Sunny. All rights reserved
                    </p>
                </div>
                <nav className="footer__menu">
                    <p>Destinations</p>
                    <ul>
                        <li><a href="#">Africa</a></li>
                        <li><a href="#">Antarctica</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">America</a></li>
                    </ul>
                </nav>
                <nav className="footer__menu">
                    <p>Shop</p>
                    <ul>
                        <li><a href="#">Destination Guides</a></li>
                        <li><a href="#">Pictorial & Gifts</a></li>
                        <li><a href="#">Special Offers</a></li>
                        <li><a href="#">Delivery Times</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </nav>
                <nav className="footer__menu">
                    <p>Interests</p>
                    <ul>
                        <li><a href="#">Adventure Travel</a></li>
                        <li><a href="#">Art And Culture</a></li>
                        <li><a href="#">Wildlife And Nature</a></li>
                        <li><a href="#">Family Holidays</a></li>
                        <li><a href="#">Food And Drink</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer__wrapp-bottom">
                <div className="wrapp__social">
                    <a href="#" className="social__wrapper">
                        <img src="img/twitter.svg" alt="" />
                    </a>
                    <a href="#" className="social__wrapper">
                        <img src="img/facebook.svg" alt="" />
                    </a>
                    <a href="#" className="social__wrapper">
                        <img src="img/instagram.svg" alt="" />
                    </a>
                    <a href="#" className="social__wrapper">
                        <img src="img/linkedin.svg" alt="" />
                    </a>
                    <a href="#" className="social__wrapper">
                        <img src="img/youtube.svg" alt="" />
                    </a>
                </div>
            </div> 
        </div>
    </footer> 
  )
}

export default Footer;
