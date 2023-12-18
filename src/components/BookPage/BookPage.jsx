import React, { useState, useEffect } from "react";
import BookInfo from "../BookInfo/BookInfo";
import BookMenu from "../BookMenu/BookMenu";
import backArrow from "../../assets/BackArrow.svg";
import { Box, Skeleton } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function BookPage() {
    let { book_url_id } = useParams();
    const [bookPageData, setbookPageData] = useState({});
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
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
            console.log(payload);
            setbookPageData(payload);
        });
    }, [book_url_id]);

    return (
        <div className="text-white p-[3vw] md:pl-[10vw]">
            <Link to="/dashboard">
                <img
                    src={backArrow}
                    alt="backArrow"
                    className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw]"
                />
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:grid-cols-[50%, 50%] md:mt-0 grid-rows-[80vw,1fr] mt-[5vw]">
                <Box className="relative w-[70vw] h-[70vw] md:w-[25vw] md:h-[36vw] max-w-[900px] md:col-span-1 overflow-hidden m-auto md:mt-2 p-auto shadow-element-shadow">
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
                <BookInfo
                    bookPageData={bookPageData}
                    leftElementClass="md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 text-center"
                    rightElementClass="md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-1 text-center"
                    rightLowerElementClass="md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-2 text-center"
                />
            </div>
        </div>
    );
}

export default BookPage;
