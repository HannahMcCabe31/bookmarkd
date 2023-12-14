import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";


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
        <>
          <Typography>
            <b>{props.bookshelf_name}</b>
          </Typography>
          <Box>
            {books.length > 0 &&
              books.map((book) => {
                return <img src={book?.image ? `https://bookmarkd-server.onrender.com${book.image}` : "loading"} key={book.book_id}></img>;
              })}
            
          </Box>
        </>
      );
}

export default Bookshelf;
