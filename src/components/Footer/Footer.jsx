import React from 'react'
import Box from '@mui/material/Box';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import './Footer.css'

/* const Footer = () => { */



export function Footer(props: SvgIconProps) {
  return (
    <>
   <div className='houseIcon'>
     <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      
     
    </SvgIcon>

    
      <LibraryMusicIcon sx={{ fontSize: 60 }}/>
      {/* <MenuIcon sx={{ fontSize: 60 }}/> */}
      {/* <PersonIcon sx={{ fontSize: 60 }}/> */}
      <FavoriteIcon sx={{ fontSize: 60 }}/>
      <SearchIcon sx={{ fontSize: 60 }}/> 
     {/*  <p className='homeText'>Home</p>
        <p className='searchText'>Search</p>
        <p className='LibraryText'>Library</p>
        <p className='wishListText'>Wish List</p> */}
        
    </div>
    </>
  );
}
export default function SvgIconsColor() {
    return (
      <Box
        sx={{
          '& > :not(style)': {
            m: 2,
          },
        }}
      >
        <Footer  sx={{ fontSize: 60 }}/>
        
       {/*  <p className='homeText'>Home</p>
        <p className='searchText'>Search</p>
        <p className='LibraryText'>Library</p>
        <p className='wishListText'>Wish List</p> */}
        {/* <HomeIcon color="primary" /> */}
        
        </Box>
  );
}
