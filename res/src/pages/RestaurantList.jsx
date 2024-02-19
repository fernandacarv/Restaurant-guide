import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

    function RestaurantList() {

        const API_URL = "http://localhost:5000";

        const [restaurants, setRestaurants] = useState([]);

        useEffect(() => {
        axios.get(`${API_URL}/restaurants`)
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.log(error))
        }, [])

        return (
            <div>
                <NavBar/>
                <h2>Lisbon Restaurant Guide</h2>
                {restaurants && restaurants.map((restaurant) => (
                    <div key={restaurant.id}>
                        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                                <img
                                    src={restaurant.image_url}
                                    alt="card-image"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {restaurant.name}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                        {restaurant.price_range}
                                    </p>
                                </div>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                    {restaurant.location}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <Link to={`/restaurants/${restaurant.id}`}> <button
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                    type="button" >
                                    More Information
                                </button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    
    export default RestaurantList;