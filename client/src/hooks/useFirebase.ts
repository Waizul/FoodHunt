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

import firebaseAuthentication from '../firebase/firebase.config'

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  console.log(user);

  const signUp = (form, location, navigate) => {
    setLoading(true);

    const { username, email, password } = form;
    console.log(email, password, username);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = {
          email,
          displayName: username,
        };
        console.log(newUser);
        setUser(newUser);
        saveUser(form, "post");
        updateProfile(auth.currentUser, {
          displayName: username,
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
        const signedUser = result.user;
        saveUser(signedUser.email, signedUser.displayName, "put");

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
        const signedUser = result.user;
        setUser(signedUser);
        saveUser(signedUser.email, signedUser.displayName, "put");
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
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //save user to mongodb
  const saveUser = (form, method) => {
    const user = form;
    console.log(user);
    fetch("https://still-ocean-05548.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
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
