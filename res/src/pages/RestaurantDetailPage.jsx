import { useParams } from "react-router-dom";
import data from "../assets/data/restaurants_list.json"
import axios from "axios";


function RestaurantDetailPage() {

    const {id} = useParams();

    const restaurant = data.find((rest) => {
        return rest.id == id})

        /*function handleSubmit(event) {
            event.preventDefault();
          
            axios.post(`${API_URL}/projects`, project)
            .then(()=> navigate("/projects"))
            .catch((error)=> console.log(error));
          }
          
          const form = document.querySelector('form');
          form.addEventListener('submit', handleSubmit);   */ 


    return (
        <div key={restaurant.id}>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>{restaurant.price_range}</p>
            <p>{restaurant.ratings}</p>
            <p>Location: {restaurant.area}</p>
            <form action="">
            <label>Write a Review</label>
            <input type="text" name="review" id="review"></input>
            <button type="submit" value={restaurant.reviews_written}>Submit Review</button>
            </form>
        </div>
    )
}





export default RestaurantDetailPage;