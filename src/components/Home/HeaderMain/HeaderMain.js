import React from 'react';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const HeaderMain = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Client />
            <Services />
            <Review />
        </>
    );
};

export default HeaderMain;