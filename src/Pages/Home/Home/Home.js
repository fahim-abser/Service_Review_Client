import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import Banner from '../Banner/Banner';
import PreviousWork from '../PreviousWork/PreviousWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - LUCKY-Lens</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <PreviousWork></PreviousWork>
            <About></About>
        </div>
    );
};

export default Home;