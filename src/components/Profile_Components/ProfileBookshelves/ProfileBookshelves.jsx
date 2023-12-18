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
        <div className="text-white p-[3vw] text-white lg:pr-[2vw] md:px-[2vw] md:py-0">
          <Typography variant="h5" className="md:text-xl lg:text-xl">
            Your Bookshelves
          </Typography>
          <Box className="bg-element-blue rounded-3xl my-3 p-3 md:p-2 flex flex-col">
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
        </div>
      </ThemeProvider>
    );
}

export default ProfileBookshelves;
