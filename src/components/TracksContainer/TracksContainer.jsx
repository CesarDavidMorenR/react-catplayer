import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import useFetchApi from "../../API/useFetchApi";
import { Link } from "react-router-dom";
import  './TracksContainer.css'
import { className } from "react-slick-carousel/lib/default-props";


const TracksContainer = () => {


  const { tracks } = useFetchApi();


    const [currentTrack, setTrackIndex] = useState(0);
  console.log(currentTrack);
  // Wasn't working until i put optional chaining operator "?" before url in playlist
  const playlist = tracks[currentTrack]?.url;
  const thumbnail = tracks[currentTrack]?.thumbnail;
  const name = tracks[currentTrack]?.name;

  const artist = tracks[currentTrack]?.artist;

  const genre = tracks[currentTrack]?.genre;
  const liked = tracks[currentTrack]?.liked;

  console.log(playlist);

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack - 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 2 : 0
    );
  };

  return (
    <>
      <div className="containerBody">
        <section>
          <div className="containerTrack">
            <img className="imgTrack" src={thumbnail} alt="" />
            <p className="nameTracks">{name}</p>
            <p className="trackartist">{artist}</p>
            <p className="genreTrack">{genre}</p>
            <div>{{ liked } === false ? "❤" : ""}</div>

            <AudioPlayer
              // autoPlay
              src={playlist}
              onPlay={(e) => console.log("onPlay") }
              // other props here
              showSkipControls={true}
              showJumpControls={true}
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrevious}
              onEnded={handleEnd}
            />
          </div>
          
          
          <h1 className="title__suggestion">Suggestions You May Like</h1>
          
        
          <div className="trackContainer">
            {tracks
              .sort(() => Math.random() - 0.5)
              .slice(1, 4)
              .map((track) => (
                <div className="trackCard" key={track.id}>
                  <div className="content">
                    <img
                      className="trackImage"
                      src={track.thumbnail}
                      alt={track.name}
                    />
                    {/* <img src={track.url} alt={track.name} /> */}
                    <div className="contentBx">
                      <h3>{track.name}</h3>
                      <h3 className="trackArtist">{track.artist}</h3>
                      <h3 className="trackGenre">{track.genre}</h3>
                    </div>
                  </div>
                  <ul className="sci">
                    <li>
                      <Link className="a">
                        <img
                          className="player"
                          src="https://res.cloudinary.com/dj376be4v/image/upload/v1671140283/295129_w8ng1h.png"
                          alt="error"
                        />
                      </Link>

                    </li>
                  </ul>
                </div>
               
              ))}
            
          </div>
     
         
        </section>
      </div>
    </>
  );
};

export default TracksContainer;
