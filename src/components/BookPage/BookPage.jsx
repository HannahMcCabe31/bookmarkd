import React from "react";
import BookInfo from "../BookInfo/BookInfo";
import BookMenu from "../BookMenu/BookMenu";
import backArrow from "../../assets/BackArrow.svg";
import { Box } from "@mui/material";

function BookPage() {
    return (
        <div className="text-white p-6">
            <img src={backArrow} alt="backArrow" className="w-8 h-8" />
            <div className="grid grid-cols-1 grid-rows-[64vw,1fr]">
            <img src="placeholder" className="w-[64vw] m-auto p-auto" />
                <Box variant="section" className="grid grid-span-2 grid-rows-7 grid-cols-1">
                    <BookInfo />
                    <BookMenu />
                </Box>
            </div>
        </div>
    );
}

export default BookPage;
