import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import PreviousWork from '../PreviousWork/PreviousWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PreviousWork></PreviousWork>
            <About></About>
        </div>
    );
};

export default Home;