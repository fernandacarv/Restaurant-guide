import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = "http://localhost:5000";

function Review(props) {
    const [userReview, setUserReview] = useState("");
    const [username, setUsername] = useState("");
    const [reviews, setReviews] = useState([]);
    const {id, setRestaurantDetails, restaurantDetails} = props

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newReview = { username: username, userReview: userReview };
        const updatedRestaurantDetails = {...restaurantDetails, reviews:[...restaurantDetails.reviews, newReview]}
        setRestaurantDetails((previous) => { return {...previous, reviews:[...restaurantDetails.reviews, newReview]}});

        console.log(updatedRestaurantDetails);
      
        axios.put(`${API_URL}/restaurants/${id}`, updatedRestaurantDetails)
            .then(() => {
                setUserReview("");
                setUsername("");
                // Refresh reviews for the restaurant after adding a new review
                axios.get(`${API_URL}/restaurants/${id}`)
                    .then(response => {
                        setReviews(response.data.reviews);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
   
    };
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="userReview">Write a review:</label>
                <input
                    type="text"
                    id="userReview"
                    name="userReview"
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </article>
    );
}

export default Review;