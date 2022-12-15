import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import useFetchApi from "../API/useFetchApi";

const PlayerPage = () => {
  const { tracks } = useFetchApi();

  //   [

  //   { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3" },
  //   { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3" },
  // ];

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
      <div>
        <img src={thumbnail} alt="" />
        <p>{name}</p>
        <p>{artist}</p>
        <p>{genre}</p>
        <div>{{ liked } === false ? "❤" : "😨"}</div>

        <AudioPlayer
          // autoPlay
          src={playlist}
          onPlay={(e) => console.log("onPlay")}
          // other props here
          showSkipControls={true}
          showJumpControls={true}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
          onEnded={handleEnd}
        />
      </div>
    </>
  );
};

export default PlayerPage;
