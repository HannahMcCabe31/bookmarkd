import { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProfileBookSlider from "../ProfileBookSlider/ProfileBookSlider.jsx";
import fetchLatestBooks from "../../../hooks/fetchLatestBooks";
import ProfileCurrentlyReadingBook from "../ProfileCurrentlyReadingBook/ProfileCurrentlyReadingBook.jsx";
import { TokenContext } from "../../App/App.jsx";

function ProfileCurrentlyReading() {
    const token = useContext(TokenContext);
    const [currentlyReading, setCurrentlyReading] = useState(null);
    const [currentlyReadingBookData, setCurrentlyReadingBookData] = useState(
        []
    );

    useEffect(() => {
        fetchLatestBooks(token).then((payload) => {
            setCurrentlyReading(payload);
        });
    }, []);

    useEffect(() => {
        async function fetchBookData(book_id) {
            const book = await fetch(
                `https://bookmarkd-server.onrender.com/api/books?book_id=${book_id}`,

                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (book.ok) {
                const bookPageData = await book.json();
                if (Array.isArray(currentlyReadingBookData)) {
                    setCurrentlyReadingBookData((array) => {
                        if (
                            array.some(
                                (book) =>
                                    book.book_id ===
                                    bookPageData.payload.book_id
                            )
                        ) {
                            return array; // Return existing array if book_id found
                        }
                        return [...array, bookPageData.payload]; // Add new book if book_id is not found
                    });
                }
            }
        }
        if (currentlyReading) {
            for (let i = 0; i < 2; i++) {
                fetchBookData(currentlyReading[i]);
            }
        }
    }, [currentlyReading]);

    return (
        <div className="p-[3vw] md:p-0">
            <Typography variant="h5" className="md:text-2xl lg:text-3xl">
                Currently Reading
            </Typography>
            <Box className="bg-element-blue rounded-3xl my-3 p-3 md:p-1">
                {currentlyReadingBookData.length > 0 && (
                    <>
                        <ProfileCurrentlyReadingBook
                            book_title={currentlyReadingBookData[0]?.title}
                            book_author={currentlyReadingBookData[0]?.author}
                            book_pages={
                                currentlyReadingBookData[0]?.number_of_pages
                            }
                            book_id={currentlyReadingBookData[0]?.book_id}
                        />
                        <ProfileCurrentlyReadingBook
                            book_title={currentlyReadingBookData[1]?.title}
                            book_author={currentlyReadingBookData[1]?.author}
                            book_pages={
                                currentlyReadingBookData[1]?.number_of_pages
                            }
                            book_id={currentlyReadingBookData[1]?.book_id}
                        />
                    </>
                )}
            </Box>
        </div>
    );
}

export default ProfileCurrentlyReading;
