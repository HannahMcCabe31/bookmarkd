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

  return (
    <ThemeProvider theme={bookmarkd}>
      {!forgottenPassword ? (
        <Container maxWidth="sm">
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
              <Typography display="inline" variant="logo" color="starBlue.main">
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
        </Container>
      ) : (
        <Container maxWidth="sm">
        <Link to="/">
            <img onClick={() => setForgottenPassword(false)}
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
              <Typography display="inline" variant="logo" color="starBlue.main">
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
        </Container>
      )}
    </ThemeProvider>
  );
}

export default Login;
