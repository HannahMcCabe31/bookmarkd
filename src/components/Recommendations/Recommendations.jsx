import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";

import { useContext, useEffect } from "react";
import { data } from "autoprefixer";

function Recommendations() {
  const [searchType, setSearchType] = useState("title");
  const [searchInput, setSearchInput] = useState("");
  const [recommendations, setRecommendations] = useState("");

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
  useEffect(() => {}, []);
  async function fetchAIRec(e) {
    e.preventDefault();
    // fetch data from server
    console.log("fetching data");
    const response = await fetch("http://localhost:3000/api/ai_api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: searchInput,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setRecommendations(data.payload.content);
    } else {
      console.log("error");
    }
  }

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
                    onChange={handleSearchInputChange}
                  ></SearchBar>
                </Box>
                <Box>
                  <button onClick={fetchAIRec}>Submit</button>
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
                  {recommendations} <br />
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
