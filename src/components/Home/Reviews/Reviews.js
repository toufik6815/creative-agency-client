import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("https://evening-escarpment-47993.herokuapp.com//reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);

    return (
        <section className="reviews">

            <div className="container">
                <div className='text-center'>
                    <h2>Clients <span>Feedback</span></h2>
                </div>
                
                <div className='d-flex justify-content-center'>
                    <div className="w-80 row">
                        {
                            reviews.map(comment => <Review key={comment._id} comment={comment}></Review>)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;