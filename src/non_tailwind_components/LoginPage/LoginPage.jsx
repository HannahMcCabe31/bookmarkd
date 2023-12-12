import React from "react";
import { useState } from "react";
import { supabase } from "../../components/Supabase/client.js";
import { Link, useNavigate } from "react-router-dom";
import "./styles/LoginPageStyles.css";
// import logo from "../assets/teamLogo.PNG";

const LoginPage = ({ setToken }) => {
  const [forgottenPassword, setForgottenPassword] = useState(false);

  let navigate = useNavigate();

  // Toggle Button
  const handleToggleClick = (e) => {
    const container = document.getElementById("container");
    container.classList.toggle("active");
  };

  // Register Form
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //   console.log(registerFormData);
  function handleRegisterChange(e) {
    setRegisterFormData((prevRegisterFormData) => {
      return {
        ...prevRegisterFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: registerFormData.email,
        password: registerFormData.password,
        options: {
          data: { username: registerFormData.username },
        },
      });
      alert("Check your email for the confirmation link!");
    } catch (error) {
      alert(error);
    }
  }

  // Login Form
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  // console.log(loginFormData);

  function handleLoginChange(e) {
    setLoginFormData((prevLoginFormData) => {
      return {
        ...prevLoginFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  // Social Login
  function handleAppleSocialLogin() {
    alert("Apple Social Login");
  }

  function handleGoogleSocialLogin() {
    alert("Google Social Login");
  }

  function handleTwitterSocialLogin() {
    alert("Twitter Social Login");
  }

  // Forgotten Password Form
  const [forgottenPasswordFormData, setForgottenPasswordFormData] = useState({
    email: "",
  });

  function handleForgottenPasswordChange(e) {
    setForgottenPasswordFormData((prevForgottenPasswordFormData) => {
      return {
        ...prevForgottenPasswordFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleForgottenPasswordSubmit(e) {
    e.preventDefault();
    alert("Check your email for the magic link!");
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginFormData.email,
        password: loginFormData.password,
      });
      if (error) throw error;
      // console.log(data);

      // Redirect to homepage if login is successful
      setToken(data);
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  }

  // Ai Powered Link
  const handleAiPoweredClick = () => {
    alert("Ai Powered");
  };

  // Footer Links
  const handleFooterClickTermsAndConditions = () => {
    alert("Terms & Conditions");
  };
  const handleFooterClickPrivacyPolicy = () => {
    alert("Privacy Policy");
  };

  return (
    <>
      <div className="loginPage_container">
        <div className="header" onClick={handleAiPoweredClick}>
          <h1>AI Powered.</h1>
        </div>
        <div className="LoginPage-logo-container">
          <p className="LoginPage-logo">
            book<span className="LoginPage-logo-mark">mark</span>d
          </p>
          <p className="LoginPage-logo-slogan">by readers, for readers</p>
        </div>
        <div className="container" id="container">
          <div className="form-container sign-up">
            <form onSubmit={handleRegisterSubmit}>
              <h1 className="form-title">Create Account</h1>
              <div className="social-icons">
                <p
                  className="apple social-button"
                  onClick={handleAppleSocialLogin}
                >
                  <img src="../../../public/social-icons/apple.png" />
                  Continue with Apple
                </p>
                <p
                  className="google social-button"
                  onClick={handleGoogleSocialLogin}
                >
                  <img src="../../../public/social-icons/google.png" /> Continue
                  with Google
                </p>
                <p
                  className="twitter social-button"
                  onClick={handleTwitterSocialLogin}
                >
                  <img src="../../../public/social-icons/twitter.png" />{" "}
                  Continue with Twitter
                </p>
              </div>
              <span>or use your email for registeration</span>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleRegisterChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleRegisterChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleRegisterChange}
              />
              <button>REGISTER</button>
            </form>
          </div>

          {!forgottenPassword ? (
            <div className="form-container sign-in">
              {/* login */}
              <form onSubmit={handleLoginSubmit}>
                <h1 className="form-title">Sign In</h1>
                <div className="social-icons">
                  <p
                    className="apple social-button"
                    onClick={handleAppleSocialLogin}
                  >
                    <img src="../../../public/social-icons/apple.png" />
                    Continue with Apple
                  </p>
                  <p
                    className="google social-button"
                    onClick={handleGoogleSocialLogin}
                  >
                    <img src="../../../public/social-icons/google.png" />{" "}
                    Continue with Google
                  </p>
                  <p
                    className="twitter social-button"
                    onClick={handleTwitterSocialLogin}
                  >
                    <img src="../../../public/social-icons/twitter.png" />{" "}
                    Continue with Twitter
                  </p>
                </div>
                <span>or use your email password</span>

                <span className="font-bold">Demo: JamSlam@email.com</span>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleLoginChange}
                />
                <span className="font-bold ">Demo: 123456</span>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleLoginChange}
                />
                <span
                  href="#"
                  onClick={() => {
                    setForgottenPassword(true);
                  }}
                  className="forgotten-tag"
                >
                  Forget Your Password?
                </span>
                <button>Sign In</button>
              </form>
            </div>
          ) : (
            <div className="form-container sign-in">
              {/* forgottenPassword */}
              <form onSubmit={handleForgottenPasswordSubmit}>
                <h1 className="form-title">Sign In</h1>

                <p className="">Enter your email to reset your password </p>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleForgottenPasswordChange}
                />

                <button id="forgotten-button">SEND</button>
                <p>Check your email.</p>
                <p>It has a magic link that will sign you in.</p>
                <span
                  className="font-bold forgotten-tag"
                  onClick={() => {
                    setForgottenPassword(false);
                  }}
                >
                  Remember your Password?
                </span>

                <p className="email-contact">
                  Any further issues, please contact us at{" "}
                  <span className="email">contact@bookmarkd.com</span>
                </p>
              </form>
            </div>
          )}
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <div className="toggle-panel-container">
                  <h1>Already Registered with us...</h1>
                  <h2 className="toggle-panel-info">
                    announce your new discoveries with your friends
                  </h2>
                  <p>Sign in to use all of the features</p>
                  <button id="login" onClick={handleToggleClick}>
                    Sign In
                  </button>
                </div>
              </div>
              <div className="toggle-panel toggle-right">
                <div className="toggle-panel-container">
                  <h1>Ready to Start a New Chapter...</h1>
                  <h2 className="toggle-panel-info">
                    We'll help you find your next great read.
                  </h2>
                  <p>Register for a free account to use all of the features</p>
                  <button id="register" onClick={handleToggleClick}>
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          By clicking "Continue with Email/Apple/Google/X" above, you agree to
          Bookmarkd's{" "}
          <span
            className="footer-link"
            onClick={handleFooterClickTermsAndConditions}
          >
            Terms & Conditions
          </span>{" "}
          and
          <span
            className="footer-link"
            onClick={handleFooterClickPrivacyPolicy}
          >
            {" "}
            Privacy Policy
          </span>
          .
        </div>
      </div>
    </>
  );
};

export default LoginPage;
