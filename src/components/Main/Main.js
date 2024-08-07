import React from 'react';
// import Gallery from './Gallery/Gallery.js';
import Licenses from './Licenses/Licenses.js';
import Gallery_swiper from './Gallery_swiper/Gallery_swiper.js';

function Main(props) {
  return (
    <main className='main'>
      <Gallery_swiper />
      {/* <Gallery /> */}
      <Licenses
        setSelectedCard={props.setSelectedCard}
        openImg={props.openImg}
      />
    </main>
  );
}

export default Main;
