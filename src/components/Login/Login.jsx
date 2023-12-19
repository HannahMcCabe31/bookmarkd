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

  function handleTermsandConditions() {
    alert("Terms and Conditions");
  }

  function handlePrivacyPolicy() {
    alert("Privacy Policy");
  }

  function handleAIPowered() {
    alert("AI Powered");
  }

  return (
    <ThemeProvider theme={bookmarkd}>
      {!forgottenPassword ? (
        <Container maxWidth="lg">
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

          <Box className="hidden md:block m-0 p-0">
            <div className="text-white text-[1.3rem] font-light flex justify-end pt-[5%] pr-[5%]">
              <p className="cursor-pointer" onClick={handleAIPowered}>
                {" "}
                AI Powered.
              </p>
            </div>
            <h1 className="text-white text-[3.8rem] flex flex-row justify-center mb-[-1.2rem] ">
              book
              <span className="text-star-blue p-0 m-0">mark</span>d
            </h1>

            <p className="flex flex-row justify-center text-[1.2rem] text-white mb-6">
              by readers, for readers
            </p>

            <Box className=" bg-[#14191d] flex items-center justify-center ">
              <Box className="bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]  overflow-hidden min-h-[500px] rounded-[30px] w-[44rem] h-[32rem]">
                <Box className="flex justify-center">
                  <Box className="flex justify-center  w-[100%] h-[100%] ">
                    <form className="bg-white flex flex-col justify-center ">
                      <h1 className="text-[2.5rem] font-bold self-center mb-[0.5rem] mt-[2rem]">
                        Sign In
                      </h1>
                      <div className="self-center text-center bg-black flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.5rem] cursor-pointer">
                        <img
                          src="../../../public/social-icons/apple.png"
                          className="w-[1.8rem]  pr-2 mr-[0.6rem] "
                        />
                        <p> Continue with Apple</p>
                      </div>
                      <div className="self-center text-center bg-[#0077BA] flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.5rem] cursor-pointer">
                        <img
                          src="../../../public/social-icons/google.png"
                          className="w-[1.1rem] h-[1.2rem]  mr-3 pt-[0.1rem]"
                        />
                        <p>Continue with Google</p>
                      </div>
                      <div className="self-center text-center bg-background-blue flex flex-row justify-center text-white text-[0.8rem]  rounded-xl w-[15rem] h-[2.1rem]  p-[0.4rem] mb-[0.6rem] cursor-pointer">
                        <img
                          src="../../../public/social-icons/twitter.png"
                          className="w-[1.5rem]  pr-1 mr-[0.69rem]"
                        />
                        <p>Continue with Twitter</p>
                      </div>

                      <p className="self-center mt-[0.4rem] mb-[0.5rem] text-[0.8rem]">
                        or use your email password
                      </p>
                      <p className="self-center  text-[0.8rem] mb-[0.1rem]">
                        <span className=" font-bold">DEMO:</span>{" "}
                        JamSlam@Email.com
                      </p>
                      <input
                        className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                        type="email"
                        placeholder="Email"
                        onChange={handleEmailAddressChange}
                      />
                      <p className="self-center  text-[0.8rem] mb-[0.1rem]">
                        <span className=" font-bold">DEMO:</span> 123456
                      </p>
                      <input
                        className="self-center bg-input-gray p-2 pl-5 rounded-[0.5rem] mb-2  w-[18rem]"
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                      />
                      <p className="self-center ">Forgot your Password?</p>
                      <button
                        type="submit"
                        onClick={handleLoginSubmit}
                        className="self-center p-2 bg-background-blue text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[1rem] mb-[2rem] px-10"
                      >
                        SIGN IN
                      </button>
                    </form>
                  </Box>
                  <Box className="w-[100%] h-[100%] grow hover:-translate-x-[20rem] transition-all duration-300">
                    <Box className="bg-background-blue flex text-white h-[31.5rem] w-[99%] mt-1 rounded-r-[1.9rem] hover:rounded-r-[0] hover:rounded-l-[1.9rem]">
                      <Box className=" w-[75%] flex flex-col m-auto h-[auto] text-center">
                        <h1 className="text-[1.8rem] font-light self-center mb-[2.2vh] text-start">
                          Ready to Start a New Chapter...
                        </h1>

                        <p className="self-center mb-[2vh] text-start">
                          We'll help you find your next great read
                        </p>

                        <p className="self-center mt-[4rem] text-[0.8rem] w-[80%]">
                          Register for a free account to use all of the site
                          features
                        </p>
                        <button
                          type="submit"
                          className="self-center p-2 bg-background-blue border text-[0.9rem] font-bold text-white rounded-[0.5rem] mt-[2vh] mb-[2vh] px-10"
                          onClick={() => {
                            isRegister
                              ? setisRegister(true)
                              : setisRegister(false);
                          }}
                        >
                          REGISTER
                        </button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <div className="text-white hidden md:flex justify-center w-[55%] m-auto text-center mt-3">
            <p>
              By clicking "Continue with Email/Apple/Google/X" above, you agree
              to Bookmarkd's{" "}
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
            </p>
          </div>
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
