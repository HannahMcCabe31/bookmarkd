import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SearchBar } from "../../definitions/CustomComponents";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import Typography from "@mui/material/Typography";
import backArrow from "../../assets/BackArrow.svg";
import CircularProgress from "@mui/material/CircularProgress";

import { useContext, useEffect } from "react";
import { data } from "autoprefixer";

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
  useEffect(() => {}, []);
  async function fetchAIRec(e) {
    e.preventDefault();
    // fetch data from server
    console.log("fetching data");
    const response = await fetch(
      "https://bookmarkd-server.onrender.com/api/ai_api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: searchInput,
          searchType: searchType,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // setRecommendations(data.payload.content);
      setRecommendations(extractBooks(data.payload.content));
      console.log(recommendations);
    } else {
      console.log("error");
    }
  }

  function extractBooks(text) {
    const regex = /(\d+)\.\s+\"(.*?)\" by (.*?)$/gm; // Regex pattern to match the book titles and authors

    let matches;
    const books = [];

    while ((matches = regex.exec(text)) !== null) {
      const [, number, title, author] = matches;
      books.push({ number: parseInt(number), title, author });
    }

    // Storing book titles and authors in separate variables
    let book1, book2, book3;
    if (books.length >= 3) {
      [book1, book2, book3] = books;
    }

    return books;
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
                  
                  className="md:text-[3vh] italic my-6"
                >
                  "The sky above the port was the colour of television, tuned to
                  a dead channel." - William Gibson, Neuromancer
                </Typography>
                <Typography variant="p" className="md:text-[3.5vh]">
                  Choose a category from the dropdown menu and enter your search
                  below.
                </Typography>
              </Box>
              <div className="md:grid grid-cols-3">
                <Box
                  component="section"
                  bgcolor="elementBlue.main"
                  marginRight={4}
                  marginLeft={4}
                  sx={{ p: "auto", borderRadius: 4 }}
                
                >
                  <Box className="p-4 ">
                    <div>
                      <Typography
                        variant="h3"
                      
                        className="mb-2"
                      >
                        Get recommendation by:
                      </Typography>
                    </div>
                    <Select
                      id="searchType"
                      value={searchType}
                      onChange={handleSearchTypeChange}
                     
                     className="bg-white rounded-lg min-w-[99%]"
                    >
                      <MenuItem value="title">Title</MenuItem>
                      <MenuItem value="author">Author</MenuItem>
                      <MenuItem value="genre">Genre</MenuItem>
                    </Select>
                  </Box>
                </Box>
                <Box
                  // className="md:grow-1 bg-element-blue "
                 
                  component="section"

                  className="md:text-[5px] grow-2 md:py-[3vh] md:m-0 md:mr-8 bg-element-blue p-5 rounded-2xl m-8"
                >
                  <SearchBar className=""
                    id="search-bar"
                    label={`Search by ${searchType}`}
                    variant="standard"
                    color="starBlue"
                    inputProps={{ style: { color: "white" } }}
                    onChange={handleSearchInputChange}
                  ></SearchBar>
                </Box>
                <Box  >
                  <button className="bg-element-blue   text-white rounded-2xl px-5 py-2 ml-8" onClick={fetchAIRec}>Submit</button>
                </Box>
              </div>
              <Box
                
               
                component="section"
               
                className="p-4 rounded-2xl bg-element-blue m-8"
              >
                <Typography variant="h4">
                  We recommend:
                </Typography>
                {!recommendations && <CircularProgress />}
                

                {recommendations.map((item, val) => {
                  return (
                    <div className="m-5" key={val}>
                      <p className="md: text-[1.5rem] md:py-[0.4vh]">
                        {item.number}.{" "}
                        <span className="italic md:m-2 md:text-[1.8rem]">
                          "{item.title}"
                        </span>
                        <br /> by <span className="">{item.author}</span>
                      </p>
                    </div>
                  );
                })}{" "}
                <br />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <Button
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
                </Button> */}
              </Box>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Recommendations;
