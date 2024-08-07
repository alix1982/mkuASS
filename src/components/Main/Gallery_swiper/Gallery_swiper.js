import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import { Link } from 'react-router-dom';
import photo1 from '../../../images/gallery/1.jpg';
import photo2 from '../../../images/gallery/2.JPG';
import photo3 from '../../../images/gallery/3.jpg';
import photo4 from '../../../images/gallery/4.jpg';
import photo5 from '../../../images/gallery/5.jpg';
import photo6 from '../../../images/gallery/6.jpg';
import photo7 from '../../../images/gallery/7.jpg';
import photo8 from '../../../images/gallery/8.jpg';
import photo9 from '../../../images/gallery/9.jpg';
import photo10 from '../../../images/gallery/10.jpg';
import photo11 from '../../../images/gallery/11.jpg';
import photo12 from '../../../images/gallery/12.jpg';
import photo13 from '../../../images/gallery/13.jpg';
import photo14 from '../../../images/gallery/14.jpg';
import photo15 from '../../../images/gallery/15.jpg';
import photo16 from '../../../images/gallery/16.jpg';
import photo17 from '../../../images/gallery/17.jpg';
import photo18 from '../../../images/gallery/18.jpg';
// import buttonLeft from '../../../images/buttonLeft.svg';
// import buttonRight from '../../../images/buttonRight.svg';
// import gallery from '../../../utils/gallery';

function Gallery_swiper() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(window.screen.width)
  return (
    <section className='gallerySwiper'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo6} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo7} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo8} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo9} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo10} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo11} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo12} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo13} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo14} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo15} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo16} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo17} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo18} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="gallerySwiper__img" src={photo19} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo20} />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={window.screen.width > 760 ? 8 : 4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo6} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo7} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo8} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo9} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo10} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo11} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo12} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo13} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo14} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo15} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo16} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo17} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo18} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="gallerySwiper__img" src={photo19} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gallerySwiper__img" src={photo20} />
        </SwiperSlide> */}
      </Swiper>


    </section>
  );
}

export default Gallery_swiper;
