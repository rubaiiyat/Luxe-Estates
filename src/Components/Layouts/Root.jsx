import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="mx-5 md:mx-16 lg:mx-28">
        <Outlet></Outlet>
      </div>
      <div className="sticky top-[100vh] bg-gray-800 text-white ">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
