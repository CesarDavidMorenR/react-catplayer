import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addPlaylist } from '../../redux/action/AddMusic';


const PlayList = () => {

    const {id} = useParams();
    const [music, setMusic] = useState([]);
    const dispatch = useDispatch();
    const addMusic = (music) => {
        dispatch(addPlaylist(music));
    }

    useEffect(() => {
        const getMusic = async () => {
          const response = await fetch (`http://localhost:8000/albums/${id}`);
          setMusic(await response.json());
        
  
        }
        getMusic();
      }, []);

      const ShowMusic = () => {

        return(
            <>
            <div>
            <img src={music.image} alt={music.title} />
            </div>
            <div>
            <button onClick={()=>addProduct(product)}>Add Music</button>
            <NavLink to="/src/pages/MyPlayList.jsx">
              Go Playlist
            </NavLink>
            </div>
            </>
            
        )
      }

  return (
    <div>
        <ShowMusic/>
    </div>
  )
}



export default PlayList;