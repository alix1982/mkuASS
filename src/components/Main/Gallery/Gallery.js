import React from 'react';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import photo1 from '../../../images/gallery/1.jpg';
// import photo2 from '../../../images/gallery/2.jpg';
// import photo3 from '../../../images/gallery/3.jpg';
// import photo4 from '../../../images/gallery/4.jpg';
// import photo5 from '../../../images/gallery/5.jpg';
// import photo6 from '../../../images/gallery/6.jpg';
// import buttonLeft from '../../../images/buttonLeft.svg';
// import buttonRight from '../../../images/buttonRight.svg';
import gallery from '../../../utils/gallery';

function Gallery() {
  const galleryArr = gallery();
  let indexPhoto = 1;
  const lengthGalleryArr = galleryArr.length;
  const [currentPhoto, setCurrentPhoto] = useState(galleryArr[0]);
  const [currentPhotoNext, setCurrentPhotoNext] = useState(galleryArr[1]);
  const [currentPhotoPrevious, setCurrentPhotoPrevious] = useState(
    galleryArr[lengthGalleryArr - 1]
  );
  const [counterGallery, setCounterGallery] = useState(1);
  // const [isAnimationOn, setisAnimationOn] = useState(false);

  function choosePhoto() {
    switch (currentPhoto) {
      case galleryArr[0]:
        setCurrentPhoto(galleryArr[1]);
        setCurrentPhotoNext(galleryArr[2]);
        setCurrentPhotoPrevious(galleryArr[0]);
        setCounterGallery(2);
        break;
      case galleryArr[1]:
        setCurrentPhoto(galleryArr[2]);
        setCurrentPhotoNext(galleryArr[3]);
        setCurrentPhotoPrevious(galleryArr[1]);
        setCounterGallery(3);
        break;
      case galleryArr[2]:
        setCurrentPhoto(galleryArr[3]);
        setCurrentPhotoNext(galleryArr[0]);
        setCurrentPhotoPrevious(galleryArr[2]);
        setCounterGallery(4);
        break;
      // case photo4:
      //   setCurrentPhoto(photo5);
      //   break;
      case galleryArr[3]:
        setCurrentPhoto(galleryArr[0]);
        setCurrentPhotoNext(galleryArr[1]);
        setCurrentPhotoPrevious(galleryArr[lengthGalleryArr - 1]);
        setCounterGallery(1);
        break;
      // case photo6:
      //   setCurrentPhoto(photo1);
      //   break;
      default:
        setCurrentPhoto(galleryArr[0]);
        setCurrentPhotoNext(galleryArr[1]);
        setCurrentPhotoPrevious(galleryArr[lengthGalleryArr - 1]);
        setCounterGallery(1);
        break;
    }
  }

  let switchingPhoto = setTimeout(choosePhoto, 5000);
  useEffect(() => {
    switchingPhoto;
  }, [counterGallery]);
  console.log(switchingPhoto);

  function setPhotoGallery(endArray, valueEndArray) {
    galleryArr.forEach((item, index) => {
      if (item === currentPhoto) {
        indexPhoto = index;
      }
    });
    if (indexPhoto === endArray) {
      setCurrentPhoto(galleryArr[valueEndArray]);
    } else {
      setCurrentPhoto(
        galleryArr[
          endArray === galleryArr.length - 1 ? indexPhoto + 1 : indexPhoto - 1
        ]
      );
    }
    clearTimeout(switchingPhoto);
  }

  function setPhotoNext(endArray, valueEndArray) {
    galleryArr.forEach((item, index) => {
      if (item === currentPhotoNext) {
        indexPhoto = index;
      }
    });
    if (indexPhoto === endArray) {
      setCurrentPhotoNext(galleryArr[valueEndArray]);
    } else {
      setCurrentPhotoNext(
        galleryArr[
          endArray === galleryArr.length - 1 ? indexPhoto + 1 : indexPhoto - 1
        ]
      );
    }
    clearTimeout(switchingPhoto);
  }

  function setPhotoPrevious(endArray, valueEndArray) {
    galleryArr.forEach((item, index) => {
      if (item === currentPhotoPrevious) {
        indexPhoto = index;
      }
    });
    if (indexPhoto === endArray) {
      setCurrentPhotoPrevious(galleryArr[valueEndArray]);
    } else {
      setCurrentPhotoPrevious(
        galleryArr[
          endArray === galleryArr.length - 1 ? indexPhoto + 1 : indexPhoto - 1
        ]
      );
    }
    clearTimeout(switchingPhoto);
  }

  function launchingSlider() {
    if (counterGallery <= 4) {
      setCounterGallery(counterGallery + 1);
    } else {
      setCounterGallery(1);
    }
  }

  function onSwitchingPhotoRight() {
    // console.log(switchingPhoto)
    // setisAnimationOn(true);
    setPhotoGallery(galleryArr.length - 1, 0);
    setPhotoNext(galleryArr.length - 1, 0);
    setPhotoPrevious(galleryArr.length - 1, 0);
    launchingSlider();
    // setisAnimationOn(false);
    // setTimeout(()=>{setisAnimationOn(false)}, 5000)
  }

  function onSwitchingPhotoLeft() {
    setPhotoGallery(0, galleryArr.length - 1);
    setPhotoNext(0, galleryArr.length - 1);
    setPhotoPrevious(0, galleryArr.length - 1);
    launchingSlider();
  }

  return (
    <section className='gallery'>
      {/* <button className={`gallery__buttonLeft ${isAnimationOn ? "gallery__animation" : ""}`} onClick={onSwitchingPhotoLeft}> */}
      <button className='gallery__buttonLeft' onClick={onSwitchingPhotoLeft}>
        <img
          src={currentPhotoPrevious}
          className='gallery__buttonLeftImg'
          alt='предыдущее фото'
        />
      </button>
      <img src={currentPhoto} className='gallery__photo' alt='фото' />
      {/* <button className={`gallery__buttonRight ${isAnimationOn ? "gallery__animation" : ""}`} onClick={onSwitchingPhotoRight}> */}
      <button className='gallery__buttonRight' onClick={onSwitchingPhotoRight}>
        <img
          src={currentPhotoNext}
          className='gallery__buttonRightImg'
          alt='следующее фото'
        />
      </button>
      <p className='gallery__text'>
        Муниципальное казенное учреждение
        <br />
        &laquo;Аварийно-спасательная служба Северодвинска &raquo;
      </p>
    </section>
  );
}

export default Gallery;
