import React, { useEffect, useState } from "react";
import { fetchMusic } from "../../API/FetchMusic";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import './../../assets/style/ArtisComponent.css'
const ArtistsContainer = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        //px in the screen
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll:4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };







  const [artists, setArtists] = useState([]);
  const url = "http://localhost:8000/artists";

  useEffect(() => {
    const artists = async () => {
      const data = await fetchMusic(url);
      setArtists(data);
      console.log(data);
    };
    artists();
  }, [url]);

  return (
    <>
  
  
    <Slider className="status__slider" {...settings}>

      {artists[0]?.map((artist) => (
            <div key={artist.id} className="status">
              <div className="status__avatar">
              <img src={artist.photoUrl} alt={artist.name}  />
              </div>
              <h1>{artist.popularity}</h1> 
         {/*      <h3>{artist.name}</h3>
              <h5>{artist.genres}</h5> */}
             
            </div>
          ))}
      

    </Slider>

  
     
          
   
    </>
  );
};

export default ArtistsContainer;
