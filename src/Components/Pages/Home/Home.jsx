import React from "react";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";
import HomeSlider from "../HomeSlider/HomeSlider";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  const properties = useLoaderData();
  const displayedProperties = properties.slice(0, 6);

  return (
    <div className="mb-20">
      <Carousel />
      <Filter />

      <div>
        <div className="flex justify-between items-start">
          <h1 className="text-xl md:text-4xl text-white font-bold">
            Popular Properties
          </h1>
          <Link to={"/properties"}>
            <button className="btn btn-primary text-white sm:text-sm md:text-lg">
              View All Properties
            </button>
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 35 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={20000}
          loop={true}
          freeMode={true}
          className="mySwiper mt-7"
        >
          {displayedProperties.map((property, index) => (
            <SwiperSlide key={index}>
              <HomeSlider property={property}></HomeSlider>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-10 mb-10 flex justify-center">
        <Link to={"/properties"}>
          <button className="btn btn-primary text-white text-lg">
            View All Properties
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
