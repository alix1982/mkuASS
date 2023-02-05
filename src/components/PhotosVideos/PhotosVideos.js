import React from 'react';
import gallery from '../../utils/gallery';
import ubiley20 from '../../images/ubiley20.mp4';
import ubiley25 from '../../images/ubiley25.mp4';
import ubiley30 from '../../images/ubiley30.mp4';


function PhotosVideos (props) {
  const galleryArrPhotoVideos = gallery();
  let counter = 0
  function renderingVideo () {
    counter += 1
    return((counter<2) &&
      (<iframe
        className='photosVideos__pointVideo'
        src="http://www.youtube.com/embed/3OItisEhEKI"
        title="20"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        // sameSite='false'
      >
      </iframe>)
    )
  }

  return (
    <section className="photosVideos">
      <h3 className="photosVideos__heading">Видео</h3>
      {/* <p>Боремся с Ютубом, скоро с ним договримся и видео станет доступно</p> */}

      <ul className="photosVideos__list">
        <li className="photosVideos__point">
          <h4 className="photosVideos__pointHeading">20 Службе спасения Северодвинска</h4>
          <video className='photosVideos__pointVideo' src={ubiley20} controls></video>
          <a className='photosVideos__pointLink'href="https://www.youtube.com/watch?v=3OItisEhEKI" target="_blank" rel="noreferrer">Ссылка на youtube</a>
        </li>
        <li className="photosVideos__point">
          <h4 className="photosVideos__pointHeading">25 Службе спасения Северодвинска</h4>
          <video className='photosVideos__pointVideo' src={ubiley25} controls preload='auto'></video>
          <a className='photosVideos__pointLink'href="https://www.youtube.com/watch?v=bEmd26gU_9Q" target="_blank" rel="noreferrer">Ссылка на youtube</a>
        </li>
        <li className="photosVideos__point">
          <h4 className="photosVideos__pointHeading">30 Службе спасения Северодвинска</h4>
          <video className='photosVideos__pointVideo' src={ubiley30} controls></video>
          <a className='photosVideos__pointLink'href="https://www.youtube.com/watch?v=QRJq6As4krM" target="_blank" rel="noreferrer">Ссылка на youtube</a>
        </li>
        {/* <li className="photosVideos__point">
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
        </li> */}
      </ul>
      <h3 className="photosVideos__heading">Фото</h3>
      <ul className="photosVideos__listPhoto">
        {galleryArrPhotoVideos.map((item, index) => {
          return (
          <li className="photosVideos__pointPhoto" key={index} >
            <button className="photoVideos__pointButton" onClick={()=>{props.openImg(item)}}>
              <img src={item} className="photosVideos__pointImg"/>
            </button>
          </li>
          )
        })

        }

      </ul>

    </section>
  )
}

export default PhotosVideos