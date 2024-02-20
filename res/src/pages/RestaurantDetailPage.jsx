import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Review from "../components/Review";

function RestaurantDetailPage() {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const API_URL = "http://localhost:5000";
    const navigate = useNavigate();
    const {id} = useParams();

    const getRestaurant = () => {
        axios
          .get(`${API_URL}/restaurants/${id}`)
          .then((response) => {
            const oneRestaurant = response.data;
            setRestaurantDetails(oneRestaurant);
          })
          .catch((error) => console.log(error));
      };
      
    
    const deleteProject = () =>{
        axios.delete(`${API_URL}/restaurants/${id}` ).then(()=>{
            navigate("/restaurants");
        })
        .catch((error)=>console.log(error));
    }

    useEffect(() => {
        getRestaurant(); 
    }, []);

    return (
        <div>
            {restaurantDetails !== null && (
                <div>
                    <h1>{restaurantDetails.name}</h1>
                    <p>{restaurantDetails.description}</p>
                    <p>{restaurantDetails.price_range}</p>
                    <p>{restaurantDetails.ratings}</p>
                    <p>Location: {restaurantDetails.area}</p>
                    <button onClick={deleteProject}>Delete Project</button>
                    <Review refreshRestaurant={getRestaurant} id={id} setRestaurantDetails = {setRestaurantDetails} restaurantDetails = {restaurantDetails} />
                    {restaurantDetails.reviews && restaurantDetails.reviews.map((review, i) => (
                        <div  key={i}>
                            <h4>{review.username}</h4>
                            <h4>Review: </h4>
                            <p>{review.userReview}</p>
                        </div>
                    ))}
 
                </div>
            )}
        </div>
    );
}    

export default RestaurantDetailPage;
