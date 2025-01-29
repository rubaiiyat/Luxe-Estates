import React from "react";
import { IoLocation, IoBedSharp } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBath } from "react-icons/fa";

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
    <div className="">
      <div className="card bg-base-200 w-80  shadow-xl p-4">
        <figure className="px-3 pt-3">
          <img src={main_image_url} alt={`img${id}`} className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-white">${price}</h2>
          <p className="flex gap-2 items-center text-sm">
            <IoLocation /> {short_location}
          </p>

          <div className="flex justify-between items-start mt-3 text-lg">
            <div>
              <h1 className="font-bold">Size</h1>
              <div className="flex gap-2 items-center text-sm">
                <span className="">
                  <SlSizeFullscreen />
                </span>{" "}
                {area} sqft
              </div>
            </div>
            <div>
              <h1 className="font-bold">Room</h1>
              <div className="flex gap-2 items-center text-sm">
                <span className="">
                  <IoBedSharp />
                </span>{" "}
                {total_beds}
              </div>
            </div>
            <div>
              <h1 className="font-bold">Baths</h1>
              <div className="flex gap-2 items-center text-sm">
                <span className="">
                  <FaBath />
                </span>{" "}
                {total_bathrooms}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
