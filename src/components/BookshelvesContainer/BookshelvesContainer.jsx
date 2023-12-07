import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ProfileBookshelves() {
    const bookshelves = [
        {title: "Currently Reading", books: ["The Wind in the Willows", "Neuromancer"]},
        {title: "Want to Read", books: ["The Wind in the Willows", "Neuromancer"]},
        {title: "Read", books: ["The Wind in the Willows", "Neuromancer"]},
        {title: "Favorites", books: ["The Wind in the Willows", "Neuromancer"]}
    ];

    return(
        <ThemeProvider theme={bookmarkd}>
         <Typography variant="h5" className="text-white">
                            Your Bookshelves</Typography>
            <Box className="bg-element-blue">
                {/* {bookshelves.map((bookshelf) => (
                    <Box>
                        <Typography variant="h4">{bookshelf.title}</Typography>
                        {bookshelf.books.map((book) => (
                            <Typography variant="h4">{book}</Typography>
                ))}
                    </Box>
                ))} */}
            </Box>
        </ThemeProvider>
    );
    
}

export default ProfileBookshelves;