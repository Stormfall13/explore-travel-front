import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import prev from '../assets/prev.svg';
import next from '../assets/next.svg';
import t1 from '../assets/t1.png';
import star from '../assets/star.svg';


const Testimonials = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
            if (!swiperRef.current) return;

        const swiperInstance = new Swiper(swiperRef.current, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return () => {
            swiperInstance.destroy();
        };
    }, []);

    return (
        <section className="testimonials">
            <div className="testimonials__wrapp-main">
                <h2 className="testimonials__title">Testimonials</h2>
                <div className="swiper">
                    <div className="swiper-wrapper">
                    {[...Array(3)].map((_, index) => (
                            <div className="swiper-slide" key={index}>
                            <div className="swiper__wrapp-left">
                                <div className="star__wrapp">
                                        {Array(5).fill(null).map((_, i) => (
                                        <div className="star__wrapper" key={i}>
                                            <img src={star} alt="star" />
                                        </div>
                                        ))}
                                </div>
                                <p className="swiper__content">
                                        “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
                                        dapibus ac scelerisque eu, facilisis quis purus.
                                        Morbi blandit sit amet turpis nec”
                                </p>
                                <div className="swiper__author-wrapp">
                                        <h2>Edward Newgate</h2>
                                        <p>Founder Circle</p>
                                </div>
                            </div>
                            <div className="swiper__wrapp-right">
                                <img src={t1} alt="testimonial" />
                            </div>
                            </div>
                    ))} 
                    </div>
                    <div className="swiper__btn-wrapp">
                        <div className="swiper-button-prev">
                            <img src={prev} alt="" />
                        </div>
                        <div className="swiper-button-next">
                            <img src={next} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Testimonials;

