import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //User Register Option
  const createUser = (email, password, name, url) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: url,
        }).then(() => {
          const updatedUser = auth.currentUser;
          setUser(updatedUser);
          console.log("User Created and profile updated");
        });
      })
      .catch((error) => {
        throw error;
      });
  };

  // User Sign in Option
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log("Loggedin succescull");
      })
      .catch((error) => {
        throw error;
      });
  };

  const logOut = () => {
    signOut(auth)
      .then((result) => {
        console.log("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { user, createUser, logIn, logOut };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
