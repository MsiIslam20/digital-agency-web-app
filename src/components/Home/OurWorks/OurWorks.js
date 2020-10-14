import React from 'react';
import './OurWorks.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel1 from "../../../images/carousel1.png";
import carousel2 from "../../../images/carousel2.png";
import carousel3 from "../../../images/carousel3.png";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const OurWorks = () => {
    return (
        <section className="works-wrapper section-padding" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title text-white">Here are some of <span>our works</span></h1>
                    </div>
                    <div className="col-md-12">
                        <div className="carousel-inner">
                            <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            customTransition="all .5s"
                            transitionDuration={1000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            responsive={responsive}>
                                <div>
                                    <img src={carousel1} alt="" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src={carousel2} alt="" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src={carousel3} alt="" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src={carousel1} alt="" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src={carousel2} alt="" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src={carousel3} alt="" className="img-fluid"/>
                                </div>  
                                <div>
                                    <img src={carousel2} alt="" className="img-fluid"/>
                                </div>
                                <div>
                                    <img src={carousel3} alt="" className="img-fluid"/>
                                </div>                                                      
                            </Carousel>                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;