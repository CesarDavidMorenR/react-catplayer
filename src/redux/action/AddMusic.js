// TODO For Add Item to Playlist
export const addPlaylist = (music) => {
    return{
        type : "ADDITEM",
        payload : music,
    };
};

// TODO For Delete Item to Playlist
export const delPlaylist = (music) => {
    return{
        type : "DELITEM",
        payload : music,
    };
};