
import React from "react";
import { FaGithub } from 'react-icons/fa';

function Footer(){


    return (
        <div className="footer">
            <div>
            {/* This is where we import the logo to the restaurant guide app */}
                <img src="./image/restaurant-logo.png" alt="Restaurants Guide Logo" /> </div>

            <div className="github-link" >
                {/* Link to view your App on Github */}
            <a href="https://github.com/Egbagba/Restaurant-guide" target="_blank" rel="noopener noreferrer"><FaGithub />View on Github</a>
            </div>
            <p>Your Restaurants Guide App 2024.</p>
        </div>
        
    )
}


export default Footer;