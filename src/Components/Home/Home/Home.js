import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Services/Offers/Offers';
import Services from '../Services/Services';
import Cars from '../Stores/Cars/Cars';
import Menubar from '../../Shared/Menubar/Menubar';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner />
            <Cars />
            <Services />
            <Offers />
            <Footer />
        </div>
    );
};

export default Home;