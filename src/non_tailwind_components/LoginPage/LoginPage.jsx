import React from "react";
import { useState } from "react";
import { supabase } from "../../components/Supabase/client.js";
import { Link, useNavigate } from "react-router-dom";
import "./styles/LoginPageStyles.css";
// import logo from "../assets/teamLogo.PNG";

const LoginPage = ({ setToken }) => {
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
        <div class="header" onClick={handleAiPoweredClick}>
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
              <h1 className="text-3xl">Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
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
          <div className="form-container sign-in">
            <form onSubmit={handleLoginSubmit}>
              <h1 className="text-3xl">Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
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
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Already Registered with us...</h1>
                <p>announce your new discoveries with your friends</p>
                <button
                  className="hidden"
                  id="login"
                  onClick={handleToggleClick}
                >
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Ready to Start a New Chapter...</h1>
                <p>We ll help you find your next great read.</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={handleToggleClick}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          By clicking "Continue with Email/Apple/Google/X" above, you agree to
          Bookmarkd's{" "}
          <span
            class="footer-link"
            onClick={handleFooterClickTermsAndConditions}
          >
            Terms & Conditions
          </span>{" "}
          and
          <span class="footer-link" onClick={handleFooterClickPrivacyPolicy}>
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
