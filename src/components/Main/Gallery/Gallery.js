import React from 'react';
import {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';

// import foto1 from '../../../images/gallery/1.jpg';
// import foto2 from '../../../images/gallery/2.jpg';
// import foto3 from '../../../images/gallery/3.jpg';
// import foto4 from '../../../images/gallery/4.jpg';
// import foto5 from '../../../images/gallery/5.jpg';
// import foto6 from '../../../images/gallery/6.jpg';
import buttonLeft from '../../../images/buttonLeft.svg';
import buttonRight from '../../../images/buttonRight.svg';
import gallery from '../../../utils/gallery';

function Gallery (props) {
  const galleryArr = gallery()
  let indexFoto=1;
  const lengthGalleryArr = galleryArr.length;
  const [currentFoto, setCurrentFoto] = useState(galleryArr[0]);
  const [currentFotoNext, setCurrentFotoNext] = useState(galleryArr[1]);
  const [currentFotoPrevious, setCurrentFotoPrevious] = useState(galleryArr[lengthGalleryArr - 1]);
  const [counterGallery, setCounterGallery] = useState(1);
  const [isAnimationOn, setisAnimationOn] = useState(false);

  console.log(currentFoto);
  function chooseFoto(){
    switch (currentFoto) {
      case galleryArr[0]:
        setCurrentFoto(galleryArr[1]);
        setCurrentFotoNext(galleryArr[2]);
        setCurrentFotoPrevious(galleryArr[0]);
        setCounterGallery(2);
        break;
      case galleryArr[1]:
        setCurrentFoto(galleryArr[2]);
        setCurrentFotoNext(galleryArr[3]);
        setCurrentFotoPrevious(galleryArr[1]);
        setCounterGallery(3);
        break;
      case galleryArr[2]:
        setCurrentFoto(galleryArr[3]);
        setCurrentFotoNext(galleryArr[0]);
        setCurrentFotoPrevious(galleryArr[2]);
        setCounterGallery(4);
        break;
      // case foto4:
      //   setCurrentFoto(foto5);
      //   break;
      case galleryArr[3]:
        setCurrentFoto(galleryArr[0]);
        setCurrentFotoNext(galleryArr[1]);
        setCurrentFotoPrevious(galleryArr[lengthGalleryArr - 1]);
        setCounterGallery(1);
        break;
      // case foto6:
      //   setCurrentFoto(foto1);
      //   break;
      default:
        setCurrentFoto(galleryArr[0]);
        setCurrentFotoNext(galleryArr[1]);
        setCurrentFotoPrevious(galleryArr[lengthGalleryArr - 1]);
        setCounterGallery(1);
        break;
  }}

  const switchingFoto = setTimeout(()=>{chooseFoto()}, 10000);
  useEffect(()=>{switchingFoto},[counterGallery]);

  function setFotoGallery (endArray, valueEndArray) {
    galleryArr.forEach((item, index)=>{
      if (item === currentFoto) {indexFoto=index}
    });
    if (indexFoto === endArray) { setCurrentFoto(galleryArr[valueEndArray]) } 
    else { setCurrentFoto(galleryArr[(endArray === (galleryArr.length-1)) ? (indexFoto+1) : (indexFoto -1)]) }
    clearTimeout(switchingFoto)
  }

  function setFotoNext (endArray, valueEndArray) {
    galleryArr.forEach((item, index)=>{
      if (item === currentFotoNext) {indexFoto=index}
    });
    if (indexFoto === endArray) { setCurrentFotoNext(galleryArr[valueEndArray]) } 
    else { setCurrentFotoNext(galleryArr[(endArray === (galleryArr.length-1)) ? (indexFoto+1) : (indexFoto -1)]) }
    clearTimeout(switchingFoto)
  }
  
  function setFotoPrevious (endArray, valueEndArray) {
    galleryArr.forEach((item, index)=>{
      if (item === currentFotoPrevious) {indexFoto=index}
    });
    if (indexFoto === endArray) { setCurrentFotoPrevious(galleryArr[valueEndArray]) } 
    else { setCurrentFotoPrevious(galleryArr[(endArray === (galleryArr.length-1)) ? (indexFoto+1) : (indexFoto -1)]) }
    clearTimeout(switchingFoto)
  }

  function onSwitchingFotoRight() {
    // setisAnimationOn(true);
    setFotoGallery (galleryArr.length-1, 0);
    setFotoNext (galleryArr.length-1, 0);
    setFotoPrevious (galleryArr.length-1, 0);
    // setisAnimationOn(false);
    // setTimeout(()=>{setisAnimationOn(false)}, 5000)
  }
  function onSwitchingFotoLeft() {
    setFotoGallery (0, galleryArr.length-1);
    setFotoNext (0, galleryArr.length-1);
    setFotoPrevious (0, galleryArr.length-1);
  }

  return (
      <section className="gallery">
        <button className={`gallery__buttonLeft ${isAnimationOn ? "gallery__animation" : ""}`} onClick={onSwitchingFotoLeft}>
          <img src={currentFotoPrevious} className="gallery__buttonLeftImg"/>
        </button>
        <img src={currentFoto} className="gallery__foto" alt="фото"/>
        <button className={`gallery__buttonRight ${isAnimationOn ? "gallery__animation" : ""}`} onClick={onSwitchingFotoRight}>
          <img src={currentFotoNext} className="gallery__buttonRightImg"/>
        </button>
        <p className="gallery__text">Муниципальное казенное учреждение <br/>"Аварийно-спасательная служба Северодвинска</p>
      </section>
  )
}

export default Gallery
