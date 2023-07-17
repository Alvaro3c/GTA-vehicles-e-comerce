import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import { useState } from "react";
import Photo1 from '../../assets/0_1.jpg'
import Photo2 from '../../assets/0_2.jpg'
import Photo3 from '../../assets/0_3.jpg'

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return <>

    <h1>Welcome to GTA rides online shoping</h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="center">
        <img src={Photo1} alt="" className="d-block w-60 rounded mx-auto" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Photo2} alt="" className="d-block w-60 rounded mx-auto" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Photo3} alt="" className="d-block w-60 rounded mx-auto" />
      </Carousel.Item>
    </Carousel>
    <p id="welcome-text">Here you can Search your favorite cars, sort them by speed and alphabetical order, and add them to your shopping cart. This will help you make an estimate on how much you need to save to buy all the cars you want.</p>
  </>


}
export default Home;
