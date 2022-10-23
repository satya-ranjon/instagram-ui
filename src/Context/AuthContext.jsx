import React, { createContext, useContext, useEffect, useState } from "react";
import "../firebase";

import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { doc, getFirestore, setDoc } from "firebase/firestore";

import Loading from "../components/Loading";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false);
    });
    return unSubscribe;
  }, []);

  // signup function
  async function signup(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }

  // sign && login google
  const googleAuthProvider = new GoogleAuthProvider();
  const googleAuth = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        GoogleAuthProvider.credentialFromError(error);
      });
  };

  const facebookprovider = new FacebookAuthProvider();

  const facebookAuth = () => {
    const auth = getAuth();
    signInWithPopup(auth, facebookprovider)
      .then((result) => {
        FacebookAuthProvider.credentialFromResult(result);
        // ...
      })
      .catch((error) => {
        FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };
  // login function
  async function login(email, passowrd) {
    return signInWithEmailAndPassword(auth, email, passowrd);
  }

  // logout function
  function logout() {
    return signOut(auth);
  }
  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleAuth,
    facebookAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading && <Loading />}
      {!loading && children}
    </AuthContext.Provider>
  );
}
