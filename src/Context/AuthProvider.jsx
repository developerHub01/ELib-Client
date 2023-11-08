import { createContext, useEffect, useState } from "react";
import axios from "axios";
import auth from "../firebase/config";
import { serverApi } from "../constant/constant";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  function setCookie(name, value, daysToExpire = null) {
    const date = new Date();
    if (daysToExpire !== null) {
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    } else {
      date.setTime(date.getTime() - 1);
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=;" + expires + ";path=/";
    }
  }

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser((prev) => currentUser);
      setUserLoading((prev) => false);
      if (currentUser) {
        axios
          .post(`${serverApi}/jwt`, loggedUser, { withCredential: true })
          .then((res) => {
            setCookie("token", res.data.token, 1);
          });
      } else {
        axios
          .post(`${serverApi}/jwt/logout`, loggedUser, {
            withCredential: true,
          })
          .then((res) => {
            setCookie("token");
          });
      }
    });
    return () => userStatus();
  }, [userLoading]);

  const data = "hello";
  const authInfo = {
    data,
    user,
    setUser,
    userLoading,
    signUpUser,
    signInUser,
    signOutUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
