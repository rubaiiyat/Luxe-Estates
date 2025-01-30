import React from "react";
import { IoLocation, IoBedSharp } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  const {
    id,
    main_image_url,
    title,
    status,
    price,
    area,
    short_location,
    total_beds,
    total_bathrooms,
  } = property;
  return (
    <div>
      <div className="card bg-base-200 w-80 md:w-96 shadow-xl ">
        <figure className="px-7 pt-7">
          <img src={main_image_url} alt={`img${id}`} className="rounded-xl " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-white">{title}</h2>
          <p className="flex gap-2 items-center">
            <IoLocation /> {short_location}
          </p>

          <div className="flex justify-between items-start mt-3 text-lg">
            <div>
              <h1 className="font-bold">Size</h1>
              <div className="flex gap-2 items-center">
                <span className="">
                  <SlSizeFullscreen />
                </span>{" "}
                {area} sqft
              </div>
            </div>
            <div>
              <h1 className="font-bold">Room</h1>
              <div className="flex gap-2 items-center">
                <span className="">
                  <IoBedSharp />
                </span>{" "}
                {total_beds}
              </div>
            </div>
            <div>
              <h1 className="font-bold">Baths</h1>
              <div className="flex gap-2 items-center">
                <span className="">
                  <FaBath />
                </span>{" "}
                {total_bathrooms}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-3 place-items-end">
            <div>
              <h1 className="text-lg">For {status}</h1>
              <h1 className="text-xl font-bold text-white">${price}</h1>
            </div>

            <div className="card-actions ">
              <Link
                to={`/properties/details/${id}`}
                className="btn btn-primary text-white md:text-lg"
              >
                View Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
