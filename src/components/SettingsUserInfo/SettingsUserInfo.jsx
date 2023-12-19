import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { supabase } from "../Supabase/client.js";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { SetTokenContext } from "../App/App.jsx";

function ProfileUserInfo({ token }) {
  const CDN =
    "https://ddcqxtxffblwpqoaufri.supabase.co/storage/v1/object/public/profile/";

  const [hasProfilePic, setHasProfilePic] = useState();
  const setToken = useContext(SetTokenContext);

  async function getProfilePic(token) {
    console.log("getProfilePic was");
    const { data, error } = await supabase.storage
      .from("profile")
      .list(token.user.id + "/", {
        limit: 1,
        offset: 0,
        sortBy: { column: "created_at", order: "desc" },
      });

    if (data[0].name == ".emptyFolderPlaceholder") {
      setHasProfilePic("../../../public/default-profile-pic.jpg");
    } else if (data[0].name) {
      setHasProfilePic(CDN + token?.user?.id + "/" + data[0].name);
    } else {
      console.log(error);
    }
  }

  const [formData, setFormData] = useState({
    username: token.user.user_metadata.username,
    email: token.user.email,
    password: token.user.password,
  });

  async function handleUpdateProfileInfo(e) {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        username: formData?.username || token.user.user_metadata.username,
      },
    });

    if (data) {
      setToken(data);
    } else {
      console.log(error);
    }
  }

  async function handleProfilePicChange(e) {
    const avatarFile = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("profile")
      .upload(token.user.id + "/" + uuidv4(), avatarFile);

    if (data) {
      // console.log(data);
    } else {
      console.log(error);
    }
  }
  function handleUserNameChange(e) {
    setFormData({ ...formData, username: e.target.value });
  }
  function handleEmailAddressChange(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function handlePasswordChange(e) {
    setFormData({ ...formData, password: e.target.value });
  }
  return (
    <ThemeProvider theme={bookmarkd}>
      <Box className="md:max-w-[44%] md:left-0  md:mt-[10vh] md:ml-40 lg:ml-40">
        <Typography className="border-b border-element-blue" variant="h3">
          Update Profile Information
        </Typography>
        <Box>
          <TextField
            onChange={handleUserNameChange}
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            // autoComplete="userName"
            //  autoFocus
            className="bg-input-gray rounded-3xl "
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="emailAddress"
            label="Email Address"
            name="emailAddress"
            //   autoComplete="emailAddress"
            //   autoFocus
            className="bg-input-gray rounded-3xl"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            //   autoComplete="password"
            className="bg-input-gray rounded-3xl"
          />
        </Box>
        <Box className="flex flex-row justify-between mt-10 md:mt-[3vh]">
          <Typography variant="h4" className="md:text-[2.5vh]">
            Update Profile Picture
          </Typography>
          <Box>
            <label
              className="bg-input-gray text-lg text-black font-bold py-1 px-5 rounded-md hover:bg-[#43474a] active:bg-element-blue"
              htmlFor="upload"
            >
              Upload
            </label>
            <input
              id="upload"
              type="file"
              accept="image/png image/jpeg"
              className="hidden"
              onChange={(e) => handleProfilePicChange(e)}
            />
          </Box>
        </Box>
        <Box className="flex flex-col items-center md:mt-[2vh]">
          <Button
            // onClick={handleLoginSubmit}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
            className="bg-[#06B502] w-1/3 font-bold"
            onClick={(getProfilePic, handleUpdateProfileInfo)}
          >
            UPDATE
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ProfileUserInfo;
