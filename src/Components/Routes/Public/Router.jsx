import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layouts/Root";
import Home from "../../Pages/Home/Home";
import Properties from "../../Pages/Properties/Properties";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Details from "../../Pages/Details/Details";
import PrivateRoute from "../Private/PrivateRoute";
import MyComponent from "../../Layouts/MyComponent";
import ErrorPage from "../../Pages/Error/ErrorPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/properties.json"),
        element: (
          <>
            <MyComponent title={"Home"}></MyComponent>
            <Home></Home>
          </>
        ),
      },
      {
        path: "/properties",
        loader: () => fetch("/properties.json"),
        element: (
          <>
            <MyComponent title={"Properties List"}></MyComponent>
            <Properties></Properties>
          </>
        ),
      },
      {
        path: "/properties/details/:id",

        element: (
          <>
            <MyComponent title={"Product Details"}></MyComponent>
            <PrivateRoute>
              <Details></Details>
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <MyComponent title={"About"}></MyComponent>
            <About></About>
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <MyComponent title={"Contact"}></MyComponent>
            <Contact></Contact>
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <MyComponent title={"Login"}></MyComponent>
            <Login></Login>
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <MyComponent title={"Register"}></MyComponent>
            <Register></Register>
          </>
        ),
      },
    ],
  },
]);

export default Router;
