import React, { useEffect } from "react";

const MyComponent = ({ title }) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return <div></div>;
};

export default MyComponent;
