import React, { useState } from "react";
import { Box, Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    navbar: {
      main: "#302D40"
    },
    backgroundBlue: {
      main: "#14191D"
    },
    elementBlue: {
      main: "#16344E"
    },
    coolGray: {
      main: "#A7ADBB"
    },
    shadowGray: {
      main: "#596278"
    },
    buttonBeige: {
      main: "#E1DDD1"
    },
    heartRed: {
      main: "#FF584E"
    },
    starBlue: {
      main: "#68B9FF"
    },
    white: {
      main: "#FFFFFF",
    },
  }
});

// const theme = createTheme({
//   palette: {
//     ochre: {
//       main: "#E3D026",
//       light: "#E9DB5D",
//       dark: "#A29415",
//       contrastText: "#242105",
//     },
//   },
// });

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

return (
  // Do i need to set the background colour?
  <ThemeProvider theme={theme}>
    <div className="bg-background-blue text-white">
      <Box component="section" sx={{ p: 2, border: "1px solid white" }}>
        <h1>Recommendations</h1>
        <p>
          The sky above the port was the colour of television, tuned to a dead
          channel.
        </p>
        <p>
          Choose a category from the dropdown menu and enter your search below.
        </p>
        <Box component="section" sx={{ p: 2, border: "1px solid white" }}>
          <label htmlFor="searchType">Get recommendation by:</label>
          <select
            id="searchType"
            value={searchType}
            onChange={handleSearchTypeChange}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
          </select>
        </Box>
        <Box component="section" sx={{ p: 2, border: "1px solid white" }}>
          <input
            type="text"
            placeholder="Please enter a book Title, Author or Genre that you enjoy"
            onChange={handleSearchInputChange}
            value={`${searchInput}`}
          />
        </Box>
        <Box component="section" sx={{ p: 2, border: "1px solid white" }}>
          <p>Output</p>
        </Box>
        <Button variant="contained" sx={{ borderRadius: 6 }}>
          Generate more
        </Button>
        <Button color="elementBlue" variant="contained" sx={{ borderRadius: 6,  }}>
          Save response
        </Button>
      </Box>
    </div>
  </ThemeProvider>
);



}

export default Recommendations;