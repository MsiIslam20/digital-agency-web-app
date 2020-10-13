import React from 'react';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import SingleService from './SingleService';
import './Services.css'

const serviceData = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: service1,
        key: 1,
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: service2,
        key: 2
    },
    {
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: service3,
        key: 3
    }
]

const Services = () => {
    return (
        <section className="services-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <h1 className="title">Provide awesome <span>services</span></h1>
                        <div className="service-inner">
                            <div className="row">
                                {
                                    serviceData.map(service => <SingleService service={service} key={service.key}></SingleService>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;