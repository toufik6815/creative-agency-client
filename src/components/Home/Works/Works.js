import React from 'react';
import Carousel from "react-elastic-carousel";
import './Works.css'
import Card from "../Card/Card";
import carousel_1 from "../../../images/carousels/carousel_1.png";
import carousel_2 from "../../../images/carousels/carousel_2.png";
import carousel_3 from "../../../images/carousels/carousel_3.png";
import carousel_4 from "../../../images/carousels/carousel_4.png";
import carousel_5 from "../../../images/carousels/carousel_5.png";





const Works = () => {

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ];

  return (
    <div className="card_container">

      <div className="text-center">
        <h2>Here are some of <span>our works</span></h2>
      </div>

        <div>
          <Carousel breakPoints={breakPoints}>
            <Card number={carousel_1} />
            <Card number={carousel_2} />
            <Card number={carousel_3} />
            <Card number={carousel_4} />
            <Card number={carousel_5} />
          </Carousel>
        </div>
      
    </div>
  );
};

export default Works;

{/* <div className="row mb-5">
  <div className="col-md-5 mb-4 m-md-0">
    <img className="img-fluid" src={featured} alt="" />
  </div>
  <div className="col-md-7 align-self-center">
    <h1>Exceptional Dental Care, on your Term</h1>
    <p className="text-secondary my-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere
      amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio
      saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus
      expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur
      soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus
      aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt
      officia nemo nam, delectus minima velit beatae iste praesentium ad
      repudiandae, similique excepturi sapiente.
    </p>
    <button className="btn btn-brand">Learn More</button>
  </div>
</div>; */}