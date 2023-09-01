    import React from "react";
    import Navbar from "./Navbar";
    import { FiArrowRight } from "react-icons/fi";
    
    const Home = () => {
      return (
        <div className="home-container">
          <Navbar />
          <div className="home-banner-container">
            
            <div className="home-text-section">
              <h1 className="primary-heading">
                Happy Life Starts with Health 
              </h1>
              <p className="primary-text">
                Healthy food is essential for the fitness of your mind, body and heart.
              </p>
              <button className="secondary-button">
                Start Following Now <FiArrowRight />{" "}
              </button>
            </div>
            
          </div>
        </div>
      );
    };
    
    export default Home;
   
  