import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoLocation, IoBedSharp } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBath } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();

  const [property, setProperty] = useState([]);
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProperty = data.find((properties) => properties.id == id);
        if (selectedProperty) {
          setProperty(selectedProperty);
          setMainImg(selectedProperty.main_image_url);
        }
      });
  }, [id]);
  const {
    title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    total_beds,
    total_bathrooms,
    main_image_url,
    second_image_url,
    third_image_url,
    fourth_image_url,
    fifth_image_url,
    facilities,
  } = property;

  const images = [
    main_image_url,
    second_image_url,
    third_image_url,
    fourth_image_url,
    fifth_image_url,
  ];

  const handleImage = (imageUrl) => {
    setMainImg(imageUrl);
  };

  return (
    <div className="bg-base-200 mt-5 mb-20 rounded-2xl">
      <div className="container mx-auto px-5 py-5">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImg || main_image_url}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImg"
            />

            <div className="flex gap-3 mt-3">
              {images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`image ${index + 1}`}
                  className="w-20 h-20 object-cover cursor-pointer rounded-lg shadow-md"
                  onClick={() => handleImage(imgUrl)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
            <p className="text-gray-400 mb-4">{segment_name}</p>
            <div className="mb-4">
              <h1>For {status}</h1>
              <span className="text-2xl font-bold mr-2 text-white">
                ${price}
              </span>
            </div>
            <div className="flex justify-between  md:gap-10 lg:gap-20 md:justify-start items-start mt-3 text-lg">
              <div>
                <h1 className="font-bold text-gray-300">Size</h1>
                <div className="flex gap-2 items-center">
                  <span className="">
                    <SlSizeFullscreen />
                  </span>{" "}
                  {area} sqft
                </div>
              </div>
              <div>
                <h1 className="font-bold text-gray-300">Room</h1>
                <div className="flex gap-2 items-center">
                  <span className="">
                    <IoBedSharp />
                  </span>{" "}
                  {total_beds}
                </div>
              </div>
              <div>
                <h1 className="font-bold text-gray-300">Baths</h1>
                <div className="flex gap-2 items-center">
                  <span className="">
                    <FaBath />
                  </span>{" "}
                  {total_bathrooms}
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 mt-5">{description}</p>

            <div className="mb-6">
              <p className="flex gap-2 items-center">
                <span className="text-white text-lg">
                  <IoLocation />
                </span>{" "}
                {location}
              </p>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="btn btn-primary text-white">
                Add to Cart
              </button>
              <button className="btn btn-secondary text-white">Wishlist</button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Key Facilities:
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                {facilities && facilities.length > 0 ? (
                  [...facilities].map((facility, index) => (
                    <li key={index} className="ml-5">
                      {facility}
                    </li>
                  ))
                ) : (
                  <li>No facilities available</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-5">
          <Link to={"/properties"} className="btn btn-primary">
            Back
          </Link>
          <Link to={"/"} className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
