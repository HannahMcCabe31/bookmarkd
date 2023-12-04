import React, { useState } from "react";

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
    <div className="bg-background-blue">
        <h1 className="text-white">Recommendations</h1>
        <p className="text-white">The sky above the port was the colour of television, tuned to a dead channel.</p>
        <p className="text-white">Choose a category from the dropdown menu and enter your search below</p>
        <div>
        <label className="text-white" htmlFor="searchType">Get recommendation by:</label>
        <select
            id="searchType"
            value={searchType}
            onChange={handleSearchTypeChange}
        >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
        </select>
        </div>
        <div>
            <input/>
        </div>
            </div>
)



}

export default Recommendations;