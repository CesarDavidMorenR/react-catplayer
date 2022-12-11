import React, { useState, useEffect } from "react";
import { FetchTracks } from "../API/FetchTracks";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


const PlayerPage = () => {

  const [tracks, setTracks] = useState([]);
  const url = "http://localhost:8000/tracks";

  useEffect(() => {
    const tracks = async () => {
      const data = await FetchTracks(url);
      setTracks(data);
    };
    tracks();
  }, [url]);



  const playlist = tracks.url;
    
    
  //   [
  //   { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3" },
  //   { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3" },
  //   { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3" },
  // ];

  const [currentTrack, setTrackIndex] = useState(0);
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <>
      <div>
        <AudioPlayer
          autoPlay
          src={playlist[currentTrack].src}
          onPlay={(e) => console.log("onPlay")}
          // other props here
          showSkipControls={true}
          showJumpControls={true}
          onClickNext={handleClickNext}
          onEnded={handleEnd}
        />
      </div>
    </>
  );
};

export default PlayerPage;
