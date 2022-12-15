import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import TracksContainer from '../components/TracksContainer/TracksContainer';
import { addPlaylist, delPlaylist } from "./../redux/action/AddMusic";




const MyPlayList = () => {
    const state = useSelector((state) => state.handlePlay);
    const dispatch = useDispatch();

    const handleAdd = (music) => {
        dispatch(addPlaylist(music));
    };
    const handleDel = (music) => {
        dispatch(delPlaylist(music));
    };

    const emptyPlaylist = () => {
        return (
            <div>
              <h3> Your PlayList is Empty</h3>
            </div>
          );
      
    };

    const PlayListMusic = (music) => {
        return(
            <>
            <div>
             <img src= {music.thumbnail} alt={music.name} />
            </div>
            <div>
                <p></p>
            </div>
        <button onClick={() => handleDel(music)}>add</button>
        <button onClick={() => handleAdd(music)}>del</button>


            </>
        )
    }
    return (
        <div>
          {state.length === 0 && emptyPlaylist()}
          {state.length !== 0 && state.map(PlayListMusic)}
         
        </div>

        
      );
 
};


export default MyPlayList