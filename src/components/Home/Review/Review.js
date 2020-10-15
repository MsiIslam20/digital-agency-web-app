import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './Review.css'



const Review = () => {

    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("https://desolate-falls-67613.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    }, [])

    return (
        <section className="review-wrapper section-padding pt-0" id="review">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title">Clients <span>Feedback</span></h1>
                    </div>
                    {
                        review.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;