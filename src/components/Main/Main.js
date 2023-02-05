import React from 'react';
import Gallery from './Gallery/Gallery.js';
import Licenses from './Licenses/Licenses.js';

function Main (props) {

  return (
    <main className="main">
      <Gallery/>
      <Licenses setSelectedCard={props.setSelectedCard} openImg={props.openImg}/>
    </main>
  )
}

export default Main
