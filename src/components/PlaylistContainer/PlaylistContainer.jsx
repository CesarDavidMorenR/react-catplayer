import React, { useEffect, useState } from "react";
import { fetchMusic } from "../../API/FetchMusic";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
const PlaylistContainer = () => {


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











  const [playlists, setPlaylist] = useState([]);
  const url = `http://localhost:8000/playlists`;

  useEffect(() => {
    const playlists = async () => {
      const data = await fetchMusic(url);
      setPlaylist(data);
   /*    console.log(data); */
    };
    playlists();
  }, [url]);
  return (
    <>
    <h1>playlist</h1>
      <Slider className="status__slider" {...settings}>

        {playlists.map((playlist) => (
          <div key={playlist.id} className="status">
            <Link to={`/TracksPage/${playlist.id}`}>
            <div className="status__avatar">
            <img src={playlist.thumbnail} alt={playlist.name} />
            </div>
            
            </Link>
            <div>
              <h2>{playlist.name}</h2>
              <p>{playlist.isFollowed}</p>
              <p>{playlist.publicAccessible}</p>
           {/*    <p>{playlist.primaryColor}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default PlaylistContainer;
