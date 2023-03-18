import React from 'react';
import Hero from '../components/landingPage/Hero';
import Analytics from '../components/landingPage/Analytics';
import Newsletter from '../components/landingPage/Newsletter';
import Cards from '../components/landingPage/Cards';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
        </>
    );
};

export default LandingPage;
