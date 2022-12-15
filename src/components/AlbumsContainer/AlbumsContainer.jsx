import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetchApi from "../../API/useFetchApi";

const AlbumContainer = () => {


  var settings = {
    dots: true,
    centerMode: false,
    infinite: true,
    centerPadding: "30px",

    /* focusOnSelect:true, */
    speed: 500,
    /*  slidesToShow: 7,
    slidesToScroll: 4, */
    initialSlide: 0,
    responsive: [
      {
        //px in the screen
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };







  const {albums} = useFetchApi();
 

  

  return (
    <>
    <h1>albums</h1>
    <Slider className="status__slider" {...settings}>
      {albums[0]?.map((album) => (
        <div key={album.id} className="status">
          <div className="status__avatar">
          <img src={album.imageUrl} alt="" />
          </div>
          <div>
          <h2>{album.name}</h2> 
         <p>{album.artist}</p> 
         </div>
        </div>
      ))}
      </Slider>
    </>
  );
};
export default AlbumContainer;
