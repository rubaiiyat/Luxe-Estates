import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Property from "../Property/Property";

const Properties = () => {
  const properties = useLoaderData() || [];

  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-white text-center font-bold mt-5">
        Our Property List
      </h1>

      <div className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-20 mt-7">
        {properties.map((property) => (
          <Property key={property.id} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default Properties;
