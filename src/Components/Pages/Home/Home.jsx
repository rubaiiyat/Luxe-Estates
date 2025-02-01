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

      <div className="">
        <h1 className="text-xl md:text-4xl text-white font-bold ">
          Explore all things property
        </h1>
        <div className="flex gap-5 flex-wrap justify-center  mt-10">
          <div className="w-72 md:w-96 bg-base-200 rounded-2xl py-20 p-5  md:p-20 space-y-5 mx-auto relative">
            <h1 className="text-4xl text-white font-bold">Buy a home</h1>
            <p>
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </p>
            <Link
              to={"/properties"}
              className="btn btn-outline btn-primary absolute bottom-5"
            >
              Browse homes
            </Link>
          </div>
          <div className="w-72 md:w-96 bg-base-200 rounded-2xl py-20 p-5  md:p-20 space-y-5 mx-auto relative">
            <h1 className="text-4xl text-white font-bold">Sell a home</h1>
            <p>
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </p>
            <Link
              to={"/properties"}
              className="btn btn-outline btn-primary absolute bottom-5"
            >
              See Your Options
            </Link>
          </div>
          <div className="w-72 md:w-96 bg-base-200 rounded-2xl py-20  p-5  md:p-20 space-y-5 mx-auto relative">
            <h1 className="text-4xl text-white font-bold">Rent a home</h1>
            <p>
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </p>
            <Link
              to={"/properties"}
              className="btn btn-outline btn-primary absolute bottom-5"
            >
              Find Rentals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
