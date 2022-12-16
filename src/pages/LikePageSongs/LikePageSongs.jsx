import React from 'react'
import { CartProvider } from 'react-use-cart'
import LikeSongs from '../../components/LikeSongs/LikeSongs'

const LikePageSongs = () => {
  return (
    <>
    <CartProvider>
    <LikeSongs/>
    </CartProvider>
    </>
  )
}

export default LikePageSongs