import React from 'react';

const SingleReview = ({review}) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="review-inner">
                <div className="d-flex">
                    <img src={review.img} alt="" className="img-fluid"/>
                    <div className="more">
                        <h5>{review.name}</h5>
                        <h6>{review.address}</h6>
                    </div>
                </div>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default SingleReview;