import React from 'react';
import './Header.css';
import home from '../../../images/home.png'

const Header = () => {
    return (
        <section className="home-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="home-inner">
                                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat duis laoreet maecenas.</p>
                                    <button className="btn btn-primary btn-brand">Hire us</button>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <img src={home} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;