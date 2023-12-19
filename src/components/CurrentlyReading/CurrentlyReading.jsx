import { Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { BookButton } from "../../definitions/CustomComponents";
import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../App/App";

function CurrentlyReading(props) {
  const token = useContext(TokenContext);
  const user_id = token?.user.id;

  const [currentlyReading, setCurrentlyReading] = useState(6);
  const [currentBook, setCurrentBook] = useState();
  const [userBookData, setUserBookData] = useState();

  useEffect(() => {
    async function fetchBook(currentlyReading) {
      const book = await fetch(
        `https://bookmarkd-server.onrender.com/api/books?book_id=${currentlyReading}`,

        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (book.ok) {
        const bookData = await book.json();

        return bookData.payload;
      }
    }

    async function fetchUserBookData(user_id, book_id) {
      const userBookData = await fetch(
        `https://bookmarkd-server.onrender.com/api/user_book_data?book_id=${book_id}&user_id=${user_id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (userBookData.ok) {
        const data = await userBookData.json();

        return data.payload;
      }
    }
    fetchBook(currentlyReading).then((payload) => {
      setCurrentBook(payload);
    });
    fetchUserBookData(user_id, currentlyReading).then((payload) => {
      setUserBookData(payload);
    });
  }, [currentlyReading]);

  return (
    <ThemeProvider theme={bookmarkd}>
      <Link
        to={currentBook ? `/book-page/${currentBook.book_id}` : `/dashboard`}
      >
        <Box className="text-black border rounded-2xl bg-white p-3 border-element-blue border-4   md:mx-20 sm:w-[60vw] md:w-[70vw] lg:w-[50vw]">
          <Box className="relative">
            <Box>
              <Typography
                variant="h6"
                className="pt-1 md:text-4xl lg:text-4xl mb-2"
              >
                My Current Read
              </Typography>
            </Box>
            <BookButton
              className="absolute bg-element-blue top-0 end-0"
              size="small"
              variant="filled"
            >
              ▼
            </BookButton>
          </Box>

          <Box className="flex justify-evenly ">
            <Box className="relative w-[50vw] md:w-[20vw] h-[64vw] sm:h-[45vw] md:h-[30vw] mr-5 overflow-hidden  px-auto md:p-0 lg:p-0 ">
              <img
                src={
                  currentBook?.image
                    ? `https://bookmarkd-server.onrender.com${currentBook.image}`
                    : "loading"
                }
                className="absolute top-0 object-contain "
              />
              {/* m-auto p-auto */}
            </Box>
            <Box className="">
              <Typography
                className="font-medium md:text-3xl sm:text-3xl lg:text-4xl mb-4 font-light"
                variant="h3"
              >
                {currentBook?.title ? currentBook.title : "loading"}
              </Typography>
              <Typography
                className="font-medium md:text-2xl lg:text-2xl sm:text-2xl"
                variant="p"
              >
                Author:
              </Typography>
              <Typography
                className="text-center py-1 md:text-xl lg:text-xl sm:text-xl"
                display="block"
                variant="p"
              >
                {currentBook?.author ? currentBook.author : "loading"}
              </Typography>
              <Typography
                className="font-medium md:text-2xl lg:text-2xl sm:text-2xl"
                variant="p"
              >
                Rating:
              </Typography>
              <Typography
                className="text-center py-1 md:text-xl lg:text-xl sm:text-xl"
                display="block"
                variant="p"
              >
                3.90 / 5
              </Typography>
              <Typography
                className="font-medium md:text-2xl lg:text-2xl sm:text-2xl"
                variant="p"
              >
                Current Page:
              </Typography>
              <Typography
                className="text-center py-2 md:text-xl lg:text-xl sm:text-xl"
                display="block"
                variant="p"
              >
                {userBookData?.page_progress
                  ? userBookData.page_progress
                  : "loading"}{" "}
                of{" "}
                {currentBook?.number_of_pages
                  ? currentBook.number_of_pages
                  : "loading"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Link>
    </ThemeProvider>
  );
}

export default CurrentlyReading;
