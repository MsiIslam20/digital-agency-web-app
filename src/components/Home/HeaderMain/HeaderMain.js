import React from 'react';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const HeaderMain = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Client />
        </>
    );
};

export default HeaderMain;