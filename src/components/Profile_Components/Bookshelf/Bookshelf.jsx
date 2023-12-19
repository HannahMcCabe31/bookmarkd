import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

function Bookshelf(props) {
    // Stuff
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const bookPromises = props.bookshelf_books.map((book_id) =>
                fetch(
                    `https://bookmarkd-server.onrender.com/api/books?book_id=${book_id}`,
                    
                    {
                        method: `GET`,
                        headers: {
                            Accept: "application/json",
                        },
                    }
                )
                    .then((response) =>
                        response.ok ? response.json() : Promise.reject(response)
                    )
                    .then((data) => data.payload)
                    .catch((error) => {
                        console.error(
                            `Error fetching book ${book_id}: `,
                            error
                        );
                    })
            );

            const booksData = await Promise.all(bookPromises);
            setBooks(booksData.filter((book) => book != null));
        }

        fetchBooks();
    }, [props.bookshelf_books]);

    return (
      <Box className="mb-5 md:mb-2">
        <Typography variant="h8" className="md:text-sm">
          <b>{props.bookshelf_name}</b>
        </Typography>
        <Box className="flex flex-row bg-white rounded-[1vw] px-2 mt-1">
          {books.length > 0 &&
            books.map((book, i) => {
              return (
                <Box key={`bookimage_` + i}>
                  <img
                    className="max-h-[20vw] md:max-h-[10vw] m-1 ml-0 "
                    src={
                      book?.image
                        ? `https://bookmarkd-server.onrender.com${book.image}`
                        : "loading"
                    }
                  ></img>
                </Box>
              );
            })}
        </Box>
      </Box>
    );
}

export default Bookshelf;
