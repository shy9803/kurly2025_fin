import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Scrollbar, Autoplay} from 'swiper/modules'; // Swiper 추가 컨텐츠
// Import Swiper styles
import 'swiper/css';
// 추가 컨텐츠 css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Swiper Slide 서식 변경사항
import '../../css/Slide.css';

function Main_slide(props) {
  return (
    <>
      <article>
        <h2 className='none'>이미지 슬라이드</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidePerivew={1}
          navigation
          autoplay={{delay:3000}}

          pagination={{clickable:true}}
          scrollbar={{draggable:true}}
          className="mslide"
        >
          <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide1.jpg`} alt="배너1"/></SwiperSlide>
          <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide2.png`} alt="배너2"/></SwiperSlide>
          <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide3.png`} alt="배너3"/></SwiperSlide>
          <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide4.png`} alt="배너4"/></SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}

export default Main_slide;