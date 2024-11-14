import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const UseAuth = () => {
  return useContext(AuthContext);
};

// auth provider
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register a user

  const registerUser = async (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user email and passord
  const loginUser = async (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in or sign up with google
  const signInGoogle = async () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logoutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          userName: displayName,
          photo: photoURL,
        };
      }
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    registerUser,
    setUser,
    loginUser,
    signInGoogle,
    logoutUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
