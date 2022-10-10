import React from "react";
import curry from '../images/curry.jpg';
import stew from '../images/stew.jpg'
import noodles from '../images/noodles.jpg'  


function Hero()  {
    return (
       <div className="hero">
        <div className="motto">
          <p>A taste you'll remember</p>
        </div>
        <div className="hero-images">
          <img src={stew} alt="stew" />
          <img src={curry} alt="hero" />
          <img src={noodles} alt="noodles" />
        </div>

        <div className="booking-text">
          <h1>Reservations</h1>
          <p>
            Book your reservations without leaving the comfort of your home
          </p>
         </div>
         
       </div>
    )
}

export default Hero;