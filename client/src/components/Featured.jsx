import React from 'react';
import arrowRightView from '../assets/arrow-right-view.svg';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';

const Featured = () => {
  return (
    <section className="featured">
        <div className="featured__wrapp-main">
            <div className="featured__top">
                <h2>Featured destinations</h2>
                <a href="#">
                    View all
                    <img src={arrowRightView} alt="" />
                </a>
            </div>
            <div className="featured__wrapp">
                <div className="featured__wrapper">
                    <div className="featured__img">
                        <img src={f1} alt="" />
                    </div>
                    <div className="featured__text-wrapp">
                        <h3>Raja Ampat</h3>
                        <p>Indonesia</p>
                    </div>
                </div>
                <div className="featured__wrapper">
                    <div className="featured__img">
                        <img src={f2} alt="" />
                    </div>
                    <div className="featured__text-wrapp">
                        <h3>Fanjingshan</h3>
                        <p>China</p>
                    </div>
                </div>
                <div className="featured__wrapper">
                    <div className="featured__img">
                        <img src={f3} alt="" />
                    </div>
                    <div className="featured__text-wrapp">
                        <h3>Vevey</h3>
                        <p>Switzerland</p>
                    </div>
                </div>
                <div className="featured__wrapper">
                    <div className="featured__img">
                        <img src={f4} alt="" />
                    </div>
                    <div className="featured__text-wrapp">
                        <h3>Skadar</h3>
                        <p>Montenegro</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Featured;
