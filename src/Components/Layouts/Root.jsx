import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-5 md:mx-16 lg:mx-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
