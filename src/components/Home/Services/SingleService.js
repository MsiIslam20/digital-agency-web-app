import React from 'react';

const SingleService = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="service-details text-center">
                <img src={service.img} alt="" className="img-fluid"/>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default SingleService;