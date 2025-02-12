import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explore from '../components/Explore';
import Way from '../components/Way';
import Featured from '../components/Featured';
import Guides from '../components/Guides';
import Testimonials from '../components/Testimonials';

const Home = () => {


    return (
        <div>
            <Header />
            <Explore />
            <Way />
            <Featured />
            <Guides />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
