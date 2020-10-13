import React from 'react';
import customer1 from '../../../images/customer1.png';
import customer2 from '../../../images/customer2.png';
import customer3 from '../../../images/customer3.png';
import SingleReview from './SingleReview';
import './Review.css'

const reviewData = [
    {
        name: 'Nash Patrik',
        address: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer1,
        key: 1,
    },
    {
        name: 'Miriam Barron',
        address: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer2,
        key: 1,
    },
    {
        name: 'Bria Malone',
        address: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer1,
        key: 1,
    }
]

const Review = () => {
    return (
        <section className="review-wrapper section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title">Clients <span>Feedback</span></h1>
                    </div>
                    {
                        reviewData.map(review => <SingleReview review={review} key={review.key}></SingleReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;