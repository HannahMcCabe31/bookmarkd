import React from "react";
import BookInfo from "../BookInfo/BookInfo";
import BookMenu from "../BookMenu/BookMenu";
import backArrow from "../../assets/BackArrow.svg";
import { Box } from "@mui/material";

function BookPage() {
    return (
        <div className="text-white p-[3vw]">
            <img src={backArrow} alt="backArrow" className="w-[8vw] h-[8vw]" />
            <div className="grid grid-cols-1 grid-rows-[80vw,1fr]">
            <Box className="relative w-[80vw] h-[80vw] max-w-[900px] overflow-hidden m-auto p-auto shadow-element-shadow">
            <img src="/book_covers/neuromancer.webp" className="absolute m-auto p-auto top-[-25%] object-cover" />
            </Box>
                <Box variant="section" className="grid grid-span-2 grid-rows-7 grid-cols-1">
                    <BookInfo />
                    <BookMenu />
                </Box>
            </div>
        </div>
    );
}

export default BookPage;
