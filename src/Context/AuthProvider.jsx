import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
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

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      setUser((prev) => currentUser);
      setUserLoading((prev) => false);
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
