import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";

export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //User Register Option
  const createUser = (email, password, name, url) => {
    setLoading(true);
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
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log("Loggedin succescull");
      })
      .catch((error) => {
        throw error;
      });
  };

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });
  };

  const logInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });
  };

  const logOut = () => {
    setLoading(true);
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
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logInWithGoogle,
    logInWithGithub,
    logOut,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
