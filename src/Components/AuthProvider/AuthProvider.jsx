import { getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase";

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = { user };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
