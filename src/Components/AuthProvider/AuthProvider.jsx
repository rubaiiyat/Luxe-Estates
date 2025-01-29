import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase";

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log("user created"))
      .catch((error) => console.log(error));
  };

  const authInfo = { user, createUser };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
