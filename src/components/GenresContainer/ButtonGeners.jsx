import React from 'react'

import './../../assets/style/ButtonGeners.css'

const ButtonGeners = () => {
  return (
   <>
    <div className='BtnContainer'>
    <div className='BtnTitle'>
    <h2>Música por Género</h2>
    </div>
    
     <div className="BtnGenre">
          <button className="BtnPop">Pop</button>
          <button className="BtnRagge">Reggaeton</button>
          <button className="BtnAlt">Alternative</button>
          <button className="BtnFunk">Funk</button>
          <button className="BtnGroovy">Groovy</button>
          <button className="BtnFlok">Folk</button>
          <button className="BtnElect">Electronic</button>
          <button className="BtnPopRock">Pop Rock</button>
          <button className="BtnSoul">Soul</button>
          <button className="BtnIndie">Indie</button>
          <button className="BtnRock">Rock</button>
          <button className="BtnChillout">Chillout</button>
          <button className="BtnPiano">Piano</button>
</div>
</div>
   
   
   </>
  )
}

export default ButtonGeners
