import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const API_URL = "http://localhost:5000";

function AddRestaurantPage(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");


   const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const restaurant = {name, description, category};

        axios.post(`${API_URL}/restaurants`, restaurant)
        .then(()=> navigate("/restaurants"))
        .catch((error)=> console.log(error));



    }
    return (
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value = {name} name="title" type="text" required onChange={(e)=> setName(e.target.value)}/>
        <label>Description</label>
        <input value = {description} name="description" type="text" required onChange={(e)=> setDescription(e.target.value)} />
        <input value = {category} name="category" type="text" required onChange={(e)=> setCategory(e.target.value)}/>
        <label>Category</label>
        <button type="submit">Add New Restaurant</button>
      </form>
    );
}

export default AddRestaurantPage