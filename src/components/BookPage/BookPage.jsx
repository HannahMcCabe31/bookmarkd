import React from "react";
import BookInfo from "../BookInfo/BookInfo";
import BookMenu from "../BookMenu/BookMenu";
import backArrow from "../../assets/BackArrow.svg";

function BookPage() {
    return (
        <div className="text-white p-6">
            <img src={backArrow} alt="backArrow" className="w-8 h-8" />
            <div className="grid grid-cols-1 grid-rows-[6fr,1fr,1fr,1fr,1fr,1fr]">
                <BookInfo />
            </div>
            <BookMenu />
        </div>
    );
}

export default BookPage;
