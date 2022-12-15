import React, { useEffect, useState } from "react";
import useFetchApi from "../../API/useFetchApi";
import { Link } from "react-router-dom";
const TracksContainer = () => {
  const { tracks } = useFetchApi();

  return (
    <>
      <div className="containerBody">
        <section>
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
                          src="https://images-ext-2.discordapp.net/external/0zooWSAlCB1KQo72aiLpIp-S1W8TmO10CRbcnVA1A-k/https/cdn-icons-png.flaticon.com/512/295/295129.png"
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
