import { useEffect, useState } from "react";
import { fetchMusic } from "../../API/FetchMusic";
import "./AlbumsContainer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AlbumContainer = () => {
  const settings = {
    centerMode: false,
    infinite: true,
    centerPadding: "80px",

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

  const [albums, setAlbums] = useState([]);
  const url = "http://localhost:8000/albums";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchMusic(url);
      setAlbums(data);
    };
    connection();
  }, [url]);
  return (
    <>
      <h1>Albums</h1>
      <Slider className="status__slider" {...settings}>
        {albums[0]?.map((album) => (
          <div key={album.id} className="status">
            <div className="status__avatar">
              <img className="albums__image" src={album.imageUrl} alt="" />
            </div>
            <div>
              <h2>{album.name}</h2>
              {/* <p>{album.artist}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default AlbumContainer;
