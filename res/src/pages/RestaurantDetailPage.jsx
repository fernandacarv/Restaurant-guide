import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RestaurantDetailPage() {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const API_URL = "http://localhost:5000";
    const { id } = useParams();
    const navigate = useNavigate();


    
    const deleteProject = () =>{
        axios.delete(`${API_URL}/restaurants/${id}` ).then(()=>{
            navigate("/restaurants");
        })
        .catch((error)=>console.log(error));
    }

    useEffect(() => {
        axios.get(`${API_URL}/restaurants/${id}`)
            .then((response) => {  
                setRestaurantDetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    
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
                    <form action="">
                        <label>Write a Review</label>
                        <input type="text" name="review" id="review"></input>
                        <button type="submit" value={restaurantDetails.reviews_written}>Submit Review</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default RestaurantDetailPage;
