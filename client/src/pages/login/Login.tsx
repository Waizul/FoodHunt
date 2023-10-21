import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import useAuth from "@/hooks/useAuth";

type Props = {};

const initialState = {
  fullName: "",
  username: "",
  email: "",
  avatarUrl: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const Login = (props: Props) => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  //@ts-ignore
  const { signUp, signInUsingEmail, signInUsingGoogle, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(form, location, navigate);
    signInUsingEmail(form.email, form.password, location, navigate);
    console.log(form.email);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.wrapper}>
        <div className={styles.formContent}>
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className={styles.formInput}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className={styles.formInput}>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formInput}>
              <label htmlFor="username">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className={styles.formInput}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className={styles.formInput}>
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarUrl"
                  type="text"
                  placeholder="Avatar Url"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className={styles.formInput}>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password (at least 6 character )"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className={styles.formInput}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {authError && <p id={styles.error}>{authError}</p>}
            <div className={styles.formButton}>
              <button className={styles.loginButton}>
                {isSignup ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>
          <div className={styles.formStatus}>
            <p>
              {isSignup
                ? "Already have an account? "
                : "Don't have an account? "}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
          <div className={styles.formStatus}>
            <p>Or, {isSignup ? "Sign up" : "Sign in"} using google.</p>
            <button
              onClick={() => signInUsingGoogle(location, navigate)}
              className={styles.loginButton}
            >
              {isSignup ? "Sign up with Google" : "Sign in with Google"}
            </button>
          </div>
        </div>
      </div>
      {/* <div className='image-container'>
			<img src={signinImage} alt='sign in' />
			</div> */}
    </div>
  );
};

export default Login;
