import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProperty = data.find((properties) => properties.id == id);
        if (selectedProperty) {
          setProperty(selectedProperty);
        }
      });
  }, [id]);
  return (
    <div>
      <h1>This is details page {id}</h1>
      <h1>This is details page for property {property.id}</h1>
      <h1>This is details page for property {property.title}</h1>
      <h1>total: {property.length}</h1>
    </div>
  );
};

export default Details;
