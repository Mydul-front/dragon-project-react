import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../components/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        alert("Register successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const LogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("sign Out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser("sign in successfully");
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const authData = {
    user,
    setUser,
    createUser,
    LogOut,
    signIn,
    loading,
    setLoading,
  };
  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
