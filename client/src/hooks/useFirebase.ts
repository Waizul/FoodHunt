import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import firebaseAuthentication from "../firebase/firebase.config";
import axios from "axios";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signUp = (form, location, navigate) => {
    setLoading(true);

    const { username, email, password } = form;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = {
          username: result.user.displayName,
          email: result.user.email,
          photoURL: result.user?.photoURL,
        };

        saveUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: result.user.displayName,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        setAuthError("");

        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const signInUsingEmail = (email, password, location, navigate) => {
    // setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = {
          username: result.user.displayName,
          email: result.user.email,
          photoURL: result.user?.photoURL,
        };

        saveUser(user);

        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUsingGoogle = (location, navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const newUser = {
          username: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        saveUser(newUser);

        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const existingUser = {
          username: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        saveUser(existingUser);
      } else {
        // User is signed out
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //save user to mongodb
  const saveUser = (newUser) => {
    
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((res) => setUser(res));
    //  const response = axios.post("http://localhost:5000/api/users", newUser);
    //  setUser(response)
    //  console.log('response',response.then(res => res.data))
  };

  return {
    user,
    signUp,
    signInUsingEmail,
    signInUsingGoogle,
    logOut,
    setLoading,
    loading,
    authError,
  };
};

export default useFirebase;
