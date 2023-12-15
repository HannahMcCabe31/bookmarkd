import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";


import { useContext, useEffect } from "react";

function Recommendations() {
  const [searchType, setSearchType] = useState("title");
  const [searchInput, setSearchInput] = useState("");
  const [recommendations, setRecommendations] = useState([]);


  function handleSearchTypeChange(e) {
    setSearchType(e.target.value);
  }

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }
  // Do i need a function to handle search submit?

  function saveRecommendations() {
    setRecommendations([]);
  }
  useEffect(()=> {
  async function fetchUserBookData(user_id, book_id) {
    const userBookData = await fetch(
      `https://bookmarkd-server.onrender.com/api/user_book_data?book_id=${book_id}&user_id=${user_id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (userBookData.ok) {
      const data = await userBookData.json();

              return data.payload;
          }
      }})

  return (
    <div>

      <ThemeProvider theme={bookmarkd}>
        <div className="md:max-w-[85%] md:pl-[20%]">
          <Link to="/dashboard" className="md:hidden">
            <img
              src={backArrow}
              alt="backArrow"
              className="w-8 h-8 ml-10 mt-10"
            />
          </Link>
          <div className="bg-background-blue text-white">
            <Box
              component="section"
              sx={{ p: 2, fontFamily: "League Spartan" }}
            >
              {" "}
              <Box className="flex p-8 flex-col items-start">
                <Typography variant="h1" className="md:text-[7vh]">
                  Recommendations
                </Typography>
                <Typography
                  variant="p"
                  marginY={4}
                  className="md:text-[3vh] italic"
                >
                  "The sky above the port was the colour of television, tuned to
                  a dead channel." - William Gibson, Neuromancer
                </Typography>
                <Typography variant="p" className="md:text-[3.5vh]">
                  Choose a category from the dropdown menu and enter your search
                  below.
                </Typography>
              </Box>
              <div className="md:flex flex-row ">
                <Box
                  component="section"
                  bgcolor="elementBlue.main"
                  marginRight={4}
                  marginLeft={4}
                  sx={{ p: "auto", borderRadius: 4 }}
                  className="md:border-red grow"
                >
                  <Box margin={2} sx={{ p: 1 }} className="md:text-2xl ">
                    <div>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: "bold", fontSize: "5vw" }}
                        className="md:text-[3vh]"
                      >
                        Get recommendation by:
                      </Typography>
                    </div>
                    <Select
                      id="searchType"
                      value={searchType}
                      onChange={handleSearchTypeChange}
                      sx={{
                        bgcolor: "white.main",
                        borderRadius: 1,
                        minWidth: 19 / 20,
                        height: 40,
                        marginBottom: 2,
                        marginTop: 1,
                      }}
                    >
                      <MenuItem value="title">Title</MenuItem>
                      <MenuItem value="author">Author</MenuItem>
                      <MenuItem value="genre">Genre</MenuItem>
                    </Select>
                  </Box>
                </Box>
                <Box
                  // className="md:grow-1 bg-element-blue "
                  margin={4}
                  component="section"
                  sx={{ p: 2, borderRadius: 4 }}
                  className="md:text-[5px] grow-2 md:py-[3vh] md:m-0 md:mr-8 bg-element-blue"
                >
                  <SearchBar
                    id="search-bar"
                    label={`Search by ${searchType}`}
                    variant="standard"
                    color="starBlue"
                    inputProps={{ style: { color: "white" } }}
                  ></SearchBar>
                </Box>
              </div>
              <Box
                bgcolor="elementBlue.main"
                margin={4}
                component="section"
                sx={{ p: 2, borderRadius: 4 }}
              >
                <p className="md:text-[4vh] md:pb-[0.8vh]">We recommend:</p>
                <p className="md: text-[3vh] md:py-[0.4vh]">
                  Minecraft: The Island By Max Brooks <br />
                </p>
                <p className="md: text-[3vh] md:py-[0.4vh]">
                  Terrortome by Garth Merginhi <br />
                </p>
                <p className="md: text-[3vh] md:py-[0.4vh]">
                  The Blade Itself by Joe Abercrombie <br />
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    marginLeft: 4,
                    fontFamily: "League Spartan",
                  }}
                  className="md:text-[2vh] bg-element-blue"
                >
                  Generate more
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    marginRight: 4,
                    fontFamily: "League Spartan",
                  }}
                  className="md:text-[2vh] bg-element-blue"
                >
                  Save response
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Recommendations;
