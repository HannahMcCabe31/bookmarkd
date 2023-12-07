import { useState, useEffect } from 'react'
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { Box } from "@mui/material";

function BookMenu() {

    const [liked, setLiked] = useState(false) // Eventually link this to useEffect fetching info from db

    function likeButton() {
        setLiked(liked => !liked)
        // Add logic 
    }

    
    return (
        <Box className="flex justify-around flex-row mt-[5vw]">
        <img className="w-[10vw]" src={liked ? "/img/liked_icon.png" : "/img/not_liked_icon.png"} onClick={likeButton}/>
        <img className="w-[10vw]" src="/img/add_to_shelf_icon.png" />
        <img className="w-[10vw]" src="/img/completed_icon.png" />
        </Box>
    )
}

export default BookMenu