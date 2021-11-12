import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import Offers from '../Services/Offers/Offers';
import Services from '../Services/Services';
import Cars from '../Stores/Cars/Cars';

const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner />
            <Cars />
            <Services />
            <Offers />
        </div>
    );
};

export default Home;