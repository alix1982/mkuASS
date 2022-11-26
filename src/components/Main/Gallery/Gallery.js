import React from 'react';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import foto1 from '../../../images/gallery/1.jpg';
import foto2 from '../../../images/gallery/2.jpg';
import foto3 from '../../../images/gallery/3.jpg';
import foto4 from '../../../images/gallery/4.jpg';
import foto5 from '../../../images/gallery/5.jpg';
import foto6 from '../../../images/gallery/6.jpg';
import buttonLeft from '../../../images/buttonLeft.svg';
import buttonRight from '../../../images/buttonRight.svg';
import gallery from '../../../utils/gallery';
function Gallery (props) {
  const galleryArr = gallery()
  let indexFoto=1;
  const [currentFoto, setCurrentFoto] = useState(galleryArr[0]);
  const [counterGallery, setCounterGallery] = useState(1); 
  
  function chooseFoto(){
    // console.log(currentFoto);

    switch (currentFoto) {
      case galleryArr[0]: 
      // console.log(currentFoto);

        setCurrentFoto(galleryArr[1]);
        setCounterGallery(2);
        break;
      case galleryArr[1]:
        setCurrentFoto(galleryArr[2]);
        setCounterGallery(3);
        break;
      case galleryArr[2]:
        setCurrentFoto(galleryArr[3]);
        setCounterGallery(4);
        break;
      // case foto4:
      //   setCurrentFoto(foto5);
      //   break;
      case galleryArr[3]:
        setCurrentFoto(galleryArr[0]);
        setCounterGallery(1);
        break;
      // case foto6:
      //   setCurrentFoto(foto1);
      //   break;
      default:
        setCurrentFoto(galleryArr[0]);
        setCounterGallery(1);
        break;
  }}
  function switchingFoto () {
    setTimeout(()=>{
    // console.log(currentFoto);
    chooseFoto();
    }, 5000)
  }
  useEffect(()=>{switchingFoto()},[counterGallery])

  function onSwtchingFotoRight() {
    galleryArr.forEach((item, index)=>{
      if (item === currentFoto) {indexFoto=index}
    })
    console.log(indexFoto)
    setCurrentFoto(galleryArr[indexFoto+1]);
  }
  function onSwtchingFotoLeft() {
    setCurrentFoto(currentFoto-1);
    chooseFoto()
  }
  // console.log(currentFoto)
  return (
      <section className="gallery">
        <img src={currentFoto} className="gallery__foto" alt="фото"/>
        <button className="gallery__buttonLeft" onClick={onSwtchingFotoLeft}>
          <img src={buttonLeft} className="gallery__buttonLeftImg"/>
        </button>
        <button className="gallery__buttonRight" >
          <img src={buttonRight} className="gallery__buttonRightImg" onClick={onSwtchingFotoRight}/>
        </button>
        <p className="gallery__text">Муниципальное казенное учреждение <br/>"Аварийно-спасательная служба Северодвинска</p>
      </section>
  )
}

export default Gallery
