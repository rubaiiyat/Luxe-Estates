import React from "react";
import slider1 from "../../../assets/Slider/slider1.png";
import slider2 from "../../../assets/Slider/slider2.png";
import slider3 from "../../../assets/Slider/slider3.png";
import slider4 from "../../../assets/Slider/slider4.png";
import slider5 from "../../../assets/Slider/slider5.png";
const Carousel = () => {
  return (
    <div className="-mx-5 md:-mx-16 lg:-mx-28">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="w-full brightness-50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold">
              Find Your Dream House
            </h2>
            <div className="text-lg md:text-xl mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Your ZIP Code or City"
                className="input input-bordered input-primary w-32 md:w-96 max-w-xs bg-transparent  placeholder-white"
              />
              <button className="btn  btn-primary text-white bg-transparent text-xs md:text-lg">
                Search
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full brightness-50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold">
              Find Your Dream House
            </h2>
            <div className="text-lg md:text-xl mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Your ZIP Code or City"
                className="input input-bordered input-primary w-32 md:w-96 max-w-xs bg-transparent placeholder-white"
              />
              <button className="btn  btn-primary text-white bg-transparent text-xs md:text-lg">
                Search
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full brightness-50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold">
              Find Your Dream House
            </h2>
            <div className="text-lg md:text-xl mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Your ZIP Code or City"
                className="input input-bordered input-primary w-32 md:w-96 max-w-xs bg-transparent placeholder-white"
              />
              <button className="btn  btn-primary text-white bg-transparent text-xs md:text-lg">
                Search
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full brightness-50" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-5">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold">
              Find Your Dream House
            </h2>
            <div className="text-lg md:text-xl mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Your ZIP Code or City"
                className="input input-bordered input-primary w-32 md:w-96 max-w-xs bg-transparent placeholder-white"
              />
              <button className="btn  btn-primary text-white bg-transparent  text-xs md:text-lg">
                Search
              </button>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
