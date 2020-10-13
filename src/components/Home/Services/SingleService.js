import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    return (
        <div className="col-md-4">
            <Link to={`/orders/${service._id}`}>
                <div className="service-details text-center">
                    <img src={`http://localhost:4000/${service.img}`} alt="" className="img-fluid"/>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default SingleService;