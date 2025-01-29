import React, { useState } from "react";

const Filter = () => {
  const [selectedCountry, setSelectedCountry] = useState("Australia");
  const [selectedProperty, setSelectedProperty] = useState("House");
  return (
    <div className="lg:flex flex-wrap  gap-5 items-start justify-center md:justify-between  bg-base-200 p-5 w-full rounded-2xl mb-10 -mt-2">
      <div className="">
        <h1>Location</h1>
        <select
          className="select select-primary w-full max-w-xs text-white mt-2"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="United States">United States</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Norway">Norway</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
        </select>
      </div>

      <div>
        <h1>Property Type</h1>
        <select
          className="select select-primary w-full max-w-xs text-white mt-2"
          value={selectedProperty}
          onChange={(e) => setSelectedProperty(e.target.value)}
        >
          <option value={"House"}>House</option>
          <option value={"Resort"}>Resort</option>
          <option value={"Hotel"}>Hotel</option>
        </select>
      </div>

      <div>
        <h1>Price</h1>

        <div className="relative mb-6">
          <label htmlFor="labels-range-input" className="sr-only">
            Labels range
          </label>
          <input
            id="labels-range-input"
            type="range"
            defaultValue="1000"
            min="100"
            max="1500"
            className="w-72 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
            Min ($100)
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            $500
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            $1000
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
            Max ($1500)
          </span>
        </div>
      </div>

      <div>
        <h1>Bedrooms</h1>
        <div className="join mt-1">
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="1"
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn"
            type="radio"
            name="options"
            aria-label="4+"
          />
        </div>
      </div>

      <div>
        <h1>Bathrooms</h1>
        <div className="flex gap-5 items-start mt-1">
          <div className="join">
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="1"
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="4+"
            />
          </div>
          <div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
