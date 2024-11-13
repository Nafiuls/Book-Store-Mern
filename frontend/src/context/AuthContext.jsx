import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const UseAuth = () => {
  return useContext(AuthContext);
};

// auth provider

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register a user

  const registerUser = async (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const value = {
    user,
    loading,
    registerUser,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
