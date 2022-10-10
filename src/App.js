import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import data from './data';




function App() {
  let cards = data.map(item => {
      return (
        <Booking 
            key={item}
            item= {item}
        />    
      )
  })



  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
