import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./swipers.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
function Swipers() {
  return (
    <>
      <div className="sw">
        <Swiper className="swap"
          // install Swiper modules
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
        >
          <SwiperSlide className="swiper-slide-active">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/07/15/12/wine-6688901_960_720.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            <img
              src="https://cdn.pixabay.com/photo/2021/01/06/09/19/dresden-5893714__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/26/19/36/christmas-tree-6895765__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            <img
              src="https://cdn.pixabay.com/photo/2021/12/27/11/55/winter-6897046__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/27/16/05/christmas-6828416__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            {" "}
            <img
              src="https://cdn.pixabay.com/photo/2021/11/07/12/00/background-6775845__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            {" "}
            <img
              src="https://cdn.pixabay.com/photo/2021/12/23/16/38/animal-6889575__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-active">
            {" "}
            <img
              src="https://cdn.pixabay.com/photo/2021/12/24/08/41/woman-6890711__340.jpg"
              alt=""
              className="img1"
            />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
}

export default Swipers;
