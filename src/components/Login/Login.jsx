import React, {useState} from "react";
import {
  TextField,
  Button,
  Box,
  Container,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { supabase } from "../../components/Supabase/client.js";



function Login({setToken}) {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    function handleEmailAddressChange(e) {
        setEmailAddress(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
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
        }}

  return (
    <ThemeProvider theme={bookmarkd}>
      <Container maxWidth="sm">
        <Box textAlign="right" sx={{ mt: 3 }}>
          <Typography variant="p" color="white.main">
            AI Powered
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          <Typography
            variant="h1"
          >
            book<Typography display="inline" variant="h1" color="starBlue.main">mark</Typography>d
          </Typography>
          <Typography
            variant="h2"
            color="white.main"
            sx={{ mb: 4 }}
          >
            by readers, for readers
          </Typography>
          <Typography variant="h3" color="white.main">
            We'll help you find your next great read
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            color="white.main"
            textAlign="center"
          >
            Register for a free account to use all of the site features
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1, width: 2/3}} textAlign="center">
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
              <Link className="text-white">Forgot your password?</Link>
              </Typography>
            </Box>
            <Box textAlign="center">
              <Button
                onClick={handleLoginSubmit}
                type="submit"
                alignItems="center"
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 10 }}
                className="bg-[#06B502]"
              >
                SIGN IN
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
