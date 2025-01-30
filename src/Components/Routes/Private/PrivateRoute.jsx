import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner text-primary text-2xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
