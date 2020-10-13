import React from 'react';
import Client from '../Client/Client';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import OurWorks from '../OurWorks/OurWorks';
import Review from '../Review/Review';
import Services from '../Services/Services';

const HeaderMain = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Client />
            <Services />
            <OurWorks />
            <Review />
            <Footer />
        </>
    );
};

export default HeaderMain;