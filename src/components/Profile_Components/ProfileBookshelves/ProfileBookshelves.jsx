import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../../definitions/bookmarkdTheme";
import Bookshelf from "../Bookshelf/Bookshelf";
import CircularProgress from "@mui/material/CircularProgress";

function ProfileBookshelves({ bookshelves }) {
    return (
        <ThemeProvider theme={bookmarkd}>
            <Typography variant="h5" className="text-white">
                Your Bookshelves
            </Typography>
            <Box className="bg-element-blue">
                {!bookshelves && <CircularProgress />}
                {bookshelves &&
                    bookshelves.map((item, i) => {
                        return (
                            <Bookshelf
                                key={`bookshelf_` + i}
                                bookshelf_name={item.bookshelf_name}
                                bookshelf_books={item.bookshelf_books}
                            />
                        );
                    })}
            </Box>
        </ThemeProvider>
    );
}

export default ProfileBookshelves;
