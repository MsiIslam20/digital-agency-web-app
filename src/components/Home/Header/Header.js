import React from 'react';
import './Header.css';
import home from '../../../images/home.png';
import {useSpring, animated} from 'react-spring'

const Header = () => {
    const props = useSpring({
        transform: 'translateY(0px)', 
        opacity: 1,
        from: {transform: 'translateY(60px)', opacity: 0},
        config: {duration: 800}
    });
    return (
        <section className="home-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-5">
                                <animated.div className="home-inner" style={props}>
                                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat duis laoreet maecenas.</p>
                                    <button className="btn btn-primary btn-brand">Hire Us</button>
                                </animated.div>
                            </div>
                            <animated.div  className="col-md-7" style={props}> 
                                <img src={home} alt="" className="img-fluid"/>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;