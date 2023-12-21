import React, { useState } from "react";
import { TextField, Button, Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { supabase } from "../../components/Supabase/client.js";
// import backArrow from "../../assets/backArrow.svg";
import { useContext } from "react";
import { SetTokenContext } from "../App/App.jsx";
import backArrow from "../../assets/BackArrow.svg";

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [forgottenPassword, setForgottenPassword] = useState(false);
  const [forgottenPasswordDesktop, setForgottenPasswordDesktop] =
    useState(false);
  const [isRegister, setisRegister] = useState(false);
  let navigate = useNavigate();
  const setToken = useContext(SetTokenContext);

  function handleEmailAddressChange(e) {
    setEmailAddress(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleForgottenPasswordSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        emailAddress,
        { redirectTo: "http://localhost:5173/settings" }
      );
      if (data) {
        alert(
          "Password reset email sent. Please check your email for further instructions."
        );
      }
    } catch (error) {
      alert(error);
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailAddress,
        password: password,
      });
      if (error) throw error;

      setToken(data);
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  }

  // Register Form
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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

  function handleTermsandConditions() {
    navigate("/terms-and-conditions");
  }

  function handlePrivacyPolicy() {
    navigate("privacy-policy");
  }

  function handleAIPowered() {
    navigate("/ai-powered");
  }

  return (
    <ThemeProvider theme={bookmarkd}>
      {!forgottenPassword ? (
        <Container maxWidth="lg" className=" md:mb-[-4rem]">
          <Box className=" md:ml-[-20rem]">
            <Box className="md:hidden">
              <Box textAlign="right" sx={{ mt: 3 }}>
                <Typography variant="p" color="white.main">
                  AI Powered
                </Typography>
                {/* <Link to> */}
                {/* <img src={backArrow}/>
        </Link> */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 12,
                  marginBottom: 8,
                }}
              >
                <Typography variant="logo" color="white.main" className="m-3">
                  book
                  <Typography
                    display="inline"
                    variant="logo"
                    color="starBlue.main"
                  >
                    mark
                  </Typography>
                  d
                </Typography>
                <Typography variant="h4" color="white.main" className="mb-10">
                  by readers, for readers
                </Typography>
                <Typography variant="p" color="white.main" className="m-5">
                  We'll help you find your next great read
                </Typography>
                <Typography
                  variant="p"
                  color="white.main"
                  textAlign="center"
                  className="m-5"
                >
                  Register for a free account to use all of the site features
                </Typography>
                <Typography variant="p" color="white.main" className="mt-10">
                  Sign in using your email address
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 1, width: 2 / 3 }}
                  textAlign="center"
                >
                  <TextField
                    onChange={handleEmailAddressChange}
                    margin="normal"
                    required
                    fullWidth
                    id="emailAddress"
                    label="Email Address"
                    name="emailAddress"
                    autoComplete="emailAddress"
                    autoFocus
                    className="bg-input-gray rounded-3xl"
                  />
                  <TextField
                    onChange={handlePasswordChange}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="password"
                    className="bg-input-gray rounded-3xl"
                  />
                  <Box textAlign="center">
                    <Typography variant="p">
                      <Link
                        className="text-white"
                        onClick={() => setForgottenPassword(true)}
                      >
                        Forgot your password?
                      </Link>
                    </Typography>
                  </Box>
                  <Box textAlign="center">
                    <Button
                      onClick={handleLoginSubmit}
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2, borderRadius: 2 }}
                      className="bg-[#06B502] w-2/3"
                    >
                      SIGN IN
                    </Button>
                  </Box>
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="terms"
                    color="white.main"
                    className="p-2 pl-10 pr-10 fixed bottom-0 left-0 w-full flex justify-between items-center"
                  >
                    {" "}
                    By clicking &quot;Continue with Email/Apple/Google/X&quot;
                    above, you agree to bookmarkd&apos;s Terms & Conditions and
                    Privacy Policy
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="hidden md:block m-0 p-0  ">
              <Box className="text-white text-[1.3rem] font-light flex justify-end pt-[3.5%] pr-[5%]">
                <Typography
                  variant="p"
                  className="cursor-pointer text-[1.8rem] opacity-80"
                  onClick={handleAIPowered}
                >
                  {" "}
                  AI Powered.
                </Typography>
              </Box>
              <Typography
                variant="logo"
                className="text-white text-[3.8rem] flex flex-row justify-center mb-[-0.8rem] "
              >
                book
                <span className="text-star-blue p-0 m-0">mark</span>d
              </Typography>

              <Typography
                variant="logo"
                className="flex flex-row justify-center text-[1.2rem] text-white mb-6"
              >
                by readers, for readers
              </Typography>

              <Box className=" bg-[#14191d] flex items-center justify-center ">
                <Box className="bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]  overflow-hidden min-h-[500px] rounded-[30px] w-[44rem] h-[32rem]">
                  <Box className="flex justify-center">
                    <Box className="flex justify-center  w-[100%] h-[100%]">
                      <form className="bg-white flex flex-col justify-center ">
                        <Typography
                          variant="h1"
                          className="text-[2.5rem] font-bold self-center mb-[0.5rem] mt-[3rem]"
                        >
                          Sign In
                        </Typography>
                        {!forgottenPasswordDesktop ? (
                          <>
                            <Box className="self-center text-center bg-black flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.5rem] mb-[0.5rem] cursor-pointer">
                              <img
                                src="social-icons/apple.png"
                                className="w-[2rem]  pr-3 mr-[0.1rem] "
                              />
                              <Typography
                                variant="p"
                                className="text-[0.95rem] self-center pt-[0.35rem]"
                              >
                                {" "}
                                Continue with Apple
                              </Typography>
                            </Box>
                            <Box className="self-center text-center bg-[#0077BA] flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.5rem] cursor-pointer">
                              <img
                                src="social-icons/google.png"
                                className="w-[1.1rem] h-[1.2rem]  mr-3 pt-[0.1rem]"
                              />
                              <Typography
                                variant="p"
                                className="text-[0.9rem] mt-[0.3rem]"
                              >
                                Continue with Google
                              </Typography>
                            </Box>
                            <Box className="self-center text-center bg-background-blue flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.6rem] cursor-pointer">
                              <img
                                src="social-icons/twitter.png"
                                className="w-[1.5rem]  pr-1 mr-[0.69rem]"
                              />
                              <Typography
                                variant="p"
                                className="text-[0.9rem] pt-1"
                              >
                                Continue with Twitter
                              </Typography>
                            </Box>

                            <Typography
                              variant="p"
                              className="self-center font-medium mt-[0.4rem] mb-[0.5rem] text-[0.9rem]"
                            >
                              or use your email password
                            </Typography>
                            <Box className="self-center flex flex-row mb-[0.1rem]">
                              <Typography
                                variant="p"
                                className="font-bold text-[0.8rem]"
                              >
                                DEMO:{" "}
                              </Typography>
                              <Typography
                                variant="p"
                                className="text-[0.8rem] font-medium ml-1"
                              >
                                JamSlam@Email.com
                              </Typography>
                            </Box>
                            <input
                              className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                              type="email"
                              placeholder="Email"
                              onChange={handleEmailAddressChange}
                            />

                            <Box className="self-center flex flex-row mb-[0.1rem]">
                              <Typography
                                variant="p"
                                className="font-bold text-[0.8rem]"
                              >
                                DEMO:{" "}
                              </Typography>
                              <Typography
                                variant="p"
                                className="text-[0.8rem] font-medium ml-1"
                              >
                                123456
                              </Typography>
                            </Box>
                            <input
                              className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                              type="password"
                              placeholder="Password"
                              onChange={handlePasswordChange}
                            />
                            <Typography
                              variant="p"
                              className="self-center cursor-pointer mt-1 text-[1rem] font-semibold"
                              onClick={() => {
                                setForgottenPasswordDesktop(true);
                              }}
                            >
                              Forgot your Password?
                            </Typography>
                            <button
                              type="submit"
                              onClick={handleLoginSubmit}
                              className="self-center p-2 bg-background-blue text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[1rem] mb-[2rem] px-10"
                            >
                              SIGN IN
                            </button>
                          </>
                        ) : (
                          <>
                            <Typography
                              variant="p"
                              className="self-center  mb-4 mt-5 text-[1rem] font-bold"
                            >
                              Forgotten your Password?
                            </Typography>

                            <input
                              className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-1 w-[18rem]"
                              type="email"
                              placeholder="Email"
                              onChange={handleForgottenPasswordSubmit}
                            />

                            <button
                              type="submit"
                              onClick={handleLoginSubmit}
                              className="self-center p-2 bg-[#06B502] text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[1rem] mb-2 px-10"
                            >
                              SEND
                            </button>
                            <Typography
                              variant="p"
                              className="self-center cursor-pointer mb-5 font-bold text-[0.8rem] underline"
                              onClick={() => {
                                setForgottenPasswordDesktop(false);
                              }}
                            >
                              Remember your Password?
                            </Typography>
                            <Box className="flex  flex-col justify-center">
                              <Typography
                                variant="p"
                                className="self-center mb-5 text-[1rem] font-medium"
                              >
                                Check your email.
                              </Typography>
                              <Typography
                                variant="p"
                                className="self-center mb-[3rem] font-medium text-[1rem]"
                              >
                                It has a magic link that'll sign you in.
                              </Typography>
                              <Box className="flex flex-col justify-center font-semibold ">
                                <Typography
                                  variant="p"
                                  className="text-[1rem] font-light self-center"
                                >
                                  Any further issues, please contact us at
                                </Typography>
                                <Typography
                                  variant="p"
                                  className="text-[#006ECD] self-center text-[1rem] font-semibold"
                                >
                                  contact@bookmarkd.com
                                </Typography>
                              </Box>
                            </Box>
                          </>
                        )}
                      </form>
                    </Box>

                    <Box>
                      <Box
                        className={`bg-background-blue flex text-white h-[31.5rem]  w-[21.8rem] absolute  transition-all duration-[0.55s] mt-1 ${
                          !isRegister
                            ? " rounded-r-[1.9rem] "
                            : "rounded-l-[1.9rem] -translate-x-[21.8rem]"
                        }`}
                      >
                        {!isRegister ? (
                          <Box className=" w-[75%] flex flex-col m-auto h-[auto] text-center  duration-1000 transition-opacity opacity-100 ">
                            <Typography
                              variant="p"
                              className="text-[1.8rem] font-light self-center mb-[2.2vh] text-start"
                            >
                              Ready to Start a New Chapter...
                            </Typography>

                            <Typography
                              variant="p"
                              className="self-center mb-[2vh] text-start text-[1.2rem]"
                            >
                              We'll help you find your next great read
                            </Typography>

                            <Typography
                              variant="p"
                              className="self-center mt-[4rem] text-[0.8rem] w-[80%] font-medium"
                            >
                              Register for a free account to use all of the site
                              features
                            </Typography>
                            <button
                              type="submit"
                              className="self-center p-2 bg-background-blue border text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[2vh] mb-[2vh] px-10"
                              onClick={() => {
                                isRegister
                                  ? setisRegister(false)
                                  : setisRegister(true);
                              }}
                            >
                              REGISTER
                            </button>
                          </Box>
                        ) : (
                          <Box className=" w-[75%] flex flex-col m-auto h-[auto] text-center transition-all duration-1000">
                            <Typography
                              variant="p"
                              className="text-[1.8rem] font-light self-center mb-[2.2vh] text-start"
                            >
                              Already Registered with us...
                            </Typography>

                            <Typography
                              variant="p"
                              className="self-center mb-[2vh] text-start text-[1.2rem]"
                            >
                              accounce your new discoveries with your friends
                            </Typography>

                            <Typography
                              variant="p"
                              className="self-center mt-[4rem] text-[0.8rem] w-[80%] font-medium"
                            >
                              Sign in to use all of the site features
                            </Typography>
                            <button
                              type="submit"
                              className="self-center p-2 bg-background-blue border text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[2vh] mb-[2vh] px-10"
                              onClick={() => {
                                isRegister
                                  ? setisRegister(false)
                                  : setisRegister(true);
                              }}
                            >
                              SIGN IN
                            </button>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box className={`flex justify-center  w-[100%] h-[100%] `}>
                      <form className="bg-white flex flex-col justify-center ">
                        <Typography
                          variant="h1"
                          className="text-[2.5rem] font-bold self-center mb-[1rem] mt-[3rem]"
                        >
                          Create Account
                        </Typography>
                        <Box className="self-center text-center bg-black flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.5rem] mb-[0.5rem] cursor-pointer">
                          <img
                            src="social-icons/apple.png"
                            className="w-[2rem]  pr-3 mr-[0.1rem] "
                          />
                          <Typography
                            variant="p"
                            className="text-[0.95rem] self-center pt-[0.35rem]"
                          >
                            {" "}
                            Continue with Apple
                          </Typography>
                        </Box>
                        <Box className="self-center text-center bg-[#0077BA] flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.5rem] cursor-pointer">
                          <img
                            src="social-icons/google.png"
                            className="w-[1.1rem] h-[1.2rem]  mr-3 pt-[0.1rem]"
                          />
                          <Typography
                            variant="p"
                            className="text-[0.9rem] mt-[0.3rem]"
                          >
                            Continue with Google
                          </Typography>
                        </Box>
                        <Box className="self-center text-center bg-background-blue flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.6rem] cursor-pointer">
                          <img
                            src="social-icons/twitter.png"
                            className="w-[1.5rem]  pr-1 mr-[0.69rem]"
                          />
                          <Typography
                            variant="p"
                            className="text-[0.9rem] pt-1"
                          >
                            Continue with Twitter
                          </Typography>
                        </Box>

                        <Typography
                          variant="p"
                          className="self-center mt-[0.4rem] mb-[0.8rem] text-[0.8rem] font-semibold"
                        >
                          or use your email for registration
                        </Typography>

                        <input
                          className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                          type="username"
                          placeholder="Username"
                          name="username"
                          onChange={handleRegisterChange}
                        />

                        <input
                          className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={handleRegisterChange}
                        />

                        <input
                          className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={handleRegisterChange}
                        />

                        <button
                          type="submit"
                          onClick={handleRegisterSubmit}
                          className="self-center p-2 bg-background-blue text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[1rem] mb-[2rem] px-10"
                        >
                          REGISTER
                        </button>
                      </form>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="text-white hidden md:flex justify-center w-[45%] m-auto text-center mt-3 opacity-90 ">
              <Typography variant="p" className="text-[1.1rem]">
                By clicking "Continue with Email/Apple/Google/X" above, you
                agree to Bookmarkd's{" "}
                <span
                  className="text-[#FBF214] cursor-pointer"
                  onClick={handleTermsandConditions}
                >
                  Terms & Conditions
                </span>{" "}
                and
                <span
                  className="text-[#FBF214] cursor-pointer"
                  onClick={handlePrivacyPolicy}
                >
                  {" "}
                  Privacy Policy
                </span>
                .
              </Typography>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container maxWidth="sm">
          <Box className="md:hidden">
            <Link to="/">
              <img
                onClick={() => setForgottenPassword(false)}
                src={backArrow}
                alt="backArrow"
                className="w-8 h-8 ml-10 mt-10"
              />
            </Link>
            <Box textAlign="right" sx={{ mt: 3 }}>
              <Typography variant="p" color="white.main">
                AI Powered
              </Typography>
              {/* <Link to> */}
              {/* <img src={backArrow}/>
        </Link> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 12,
                marginBottom: 8,
              }}
            >
              <Typography variant="logo" color="white.main" className="m-3">
                book
                <Typography
                  display="inline"
                  variant="logo"
                  color="starBlue.main"
                >
                  mark
                </Typography>
                d
              </Typography>
              <Typography variant="h4" color="white.main" className="mb-10">
                by readers, for readers
              </Typography>
              <Typography variant="p" color="white.main" className="m-5">
                We'll help you find your next great read
              </Typography>
              <Typography
                variant="p"
                color="white.main"
                textAlign="center"
                className="m-5"
              >
                Please enter your email address and we will send you a link to
                reset your password
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1, width: 2 / 3 }}
                textAlign="center"
              >
                <TextField
                  onChange={handleEmailAddressChange}
                  margin="normal"
                  required
                  fullWidth
                  id="emailAddress"
                  label="Email Address"
                  name="emailAddress"
                  autoComplete="emailAddress"
                  autoFocus
                  className="bg-input-gray rounded-3xl"
                />
                <Box textAlign="center"></Box>
                <Box textAlign="center">
                  <Button
                    onClick={handleForgottenPasswordSubmit}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: 2 }}
                    className="bg-[#06B502] w-2/3"
                  >
                    <Typography variant="h7">SEND EMAIL</Typography>
                  </Button>
                </Box>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="terms"
                  color="white.main"
                  className="p-2 pl-10 pr-10 fixed bottom-0 left-0 w-full flex justify-between items-center"
                >
                  {" "}
                  By clicking &quot;Continue with Email/Apple/Google/X&quot;
                  above, you agree to bookmarkd&apos;s Terms & Conditions and
                  Privacy Policy
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </ThemeProvider>
  );
}

export default Login;
