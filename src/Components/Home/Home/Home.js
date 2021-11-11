import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import Cars from '../Stores/Cars/Cars';

const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner />
            <Cars />
        </div>
    );
};

export default Home;