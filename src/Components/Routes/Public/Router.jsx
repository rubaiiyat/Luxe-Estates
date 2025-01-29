import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Home from "../../Pages/Home/Home";
import Properties from "../../Pages/Properties/Properties";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("properties.json"),
        element: <Home></Home>,
      },
      {
        path: "/properties",
        loader: () => fetch("properties.json"),
        element: <Properties></Properties>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
