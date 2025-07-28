import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GymSwiper.css";

import image from "../../assets/rasm.png";

export default function GymSwiper() {
  const images = [image, image, image, image];

  return (
    <div className="gym-swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="gym-slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      <button className="custom-prev">&#8592;</button>
      <button className="custom-next">&#8594;</button>
    </div>
  );
}
