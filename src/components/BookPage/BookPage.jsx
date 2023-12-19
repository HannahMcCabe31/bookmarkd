import React, { useState, useEffect } from "react";
import BookInfo from "../BookInfo/BookInfo";
import BookMenu from "../BookMenu/BookMenu";
import backArrow from "../../assets/BackArrow.svg";
import { Box, Skeleton, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function BookPage() {
    let { book_url_id } = useParams();
    const [bookPageData, setbookPageData] = useState({});
    const [imageLoaded, setImageLoaded] = useState(false);
    const [editingBookshelf, setEditingBookshelf] = useState(false);

    /*     useEffect(() => { // Test to determine if editingBookshelf is being flipped correctly
        if (editingBookshelf === true) {
            alert("Bingo");
        }
    }, [editingBookshelf]); */

    function bookshelfEditMode() {
        setTimeout(() => {
            setEditingBookshelf((mode) => !mode);
        }, 250);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchBookData(book_url_id) {
            const book = await fetch(
                `https://bookmarkd-server.onrender.com/api/books?book_id=${book_url_id}`,

                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (book.ok) {
                const bookPageData = await book.json();

                return bookPageData.payload;
            }
        }
        fetchBookData(book_url_id).then((payload) => {
            setbookPageData(payload);
        });
    }, [book_url_id]);

    return (
        <div className="text-white p-[3vw] md:pl-[10vw]">
            {editingBookshelf && (
                <>
                    <Box
                        className="z-[9999] absolute top-0 right-0 h-[100%] w-[100%] bg-[#00000077]"
                        tag="Box to fade background while bookshelves menu open"
                    />
                    <Box className="z-[10000] absolute top-[25%] right-[12.5%] h-[50%] w-[75%] bg-element-blue text-center rounded-2xl">
                        <Box className="text-center">
                            <Typography variant="h2" className="mt-[5%]">
                                Your bookshelves
                            </Typography>
                            <Button
                                className="absolute bottom-0 bg-star-blue text-black"
                                type="submit"
                                variant="contained"
                                onClick={bookshelfEditMode}
                            >
                                <Typography variant="h3">Done</Typography>
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            <Link to="/dashboard">
                <img
                    src={backArrow}
                    alt="backArrow"
                    className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw]"
                />
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:grid-cols-[50%, 50%] grid-rows-[80vw,1fr] mt-[5vw]">
                <Box className="relative w-[70vw] h-[70vw] md:w-[30vw] md:h-[45vw] max-w-[900px] md:col-span-1 overflow-hidden m-auto md:mt-2 p-auto shadow-element-shadow">
                    {bookPageData.image ? (
                        <img
                            src={`https://bookmarkd-server.onrender.com${bookPageData.image}`}
                            className={`absolute m-auto p-auto top-0 object-cover ${
                                imageLoaded ? "visible" : "invisible"
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    ) : (
                        <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="70vw"
                            height="70vw"
                            className="absolute m-auto p-auto top-0 object-cover z-1"
                        />
                    )}
                </Box>
                {/*                 <Box
                    variant="section"
                    className="grid md:col-start-2 md:col-end-2 md:row-span-2 grid-rows-7 grid-cols-1"
                > */}
                <BookInfo
                    bookPageData={bookPageData}
                    leftElementClass="md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 text-center"
                    rightElementClass="md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-1 text-center"
                    rightLowerElementClass="md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-2 text-center"
                />
                <BookMenu
                    editingBookshelf={editingBookshelf}
                    setEditingBookshelf={setEditingBookshelf}
                    book_id={book_url_id}
                    leftElementClass="md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 text-center"
                />
                {/*                 </Box> */}
            </div>
        </div>
    );
}

export default BookPage;
