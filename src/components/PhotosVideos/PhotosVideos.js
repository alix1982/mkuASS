import React from 'react';
import gallery from '../../utils/gallery';

function PhotosVideos (props) {
  const galleryArrPhotoVideos = gallery();
  console.log("ok")
  return (
    <section className="photosVideos">
      <h3 className="photosVideos__heading">Видео</h3>
      <p>Боремся с Ютубом, скоро с ним договримся и видео станет доступно</p>

      {/* <ul className="photosVideos__list">
        <li className="photosVideos__point">
          <h4 className="photosVideos__pointHeading">20 лет Службе спасения Северодвинска</h4>
          <iframe className='photosVideos__pointVideo'
            src="https://www.youtube.com/embed/3OItisEhEKI" 
            title="20 лет Службе спасения Северодвинска" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          >
          </iframe>
        </li>
        <li className="photosVideos__point">
          <h4 className="photosVideos__pointHeading">25 лет Службе спасения Северодвинска</h4>
          <iframe className='photosVideos__pointVideo'
            src="https://www.youtube.com/embed/bEmd26gU_9Q" 
            title="25 лет Службе спасения Северодвинска" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          >
          </iframe>
        </li>
        <li className="photosVideos__point">
          <h4 className="photosVideos__pointHeading">30 лет Службе спасения Северодвинска</h4>
          <iframe className='photosVideos__pointVideo'
            src="https://www.youtube.com/embed/QRJq6As4krM" 
            title="30 лет Службе спасения Северодвинска" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
          >
          </iframe>
        </li>
      </ul> */}
      <h3 className="photosVideos__heading">Фото</h3>
      <ul className="photosVideos__list">
        {galleryArrPhotoVideos.map((item, index) => {
          return (
          <li className="photosVideos__pointPhoto" key={index}>
            <img src={item} className="photosVideos__pointImg"/>
          </li>
          )
        })

        }
        
      </ul>

    </section>
  )
}

export default PhotosVideos