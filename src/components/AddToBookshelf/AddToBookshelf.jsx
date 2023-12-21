import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import updateBookshelf from "./updateBookshelf";

function AddToBookshelf({book_id, bookshelf_id, bookshelf_name, bookshelfEditMode, token}) {

    function handleClick() {
        bookshelfEditMode();
        updateBookshelf(token.user.id, book_id, bookshelf_id)
    }

    return (
        <div className="justify-center text-center w-[90%] m-auto p-auto py-[1vw] mt-[1vw] border-2 rounded-2xl border-star-blue hover:border-white hover:bg-[#FFFFFF15] transition ease-in-out" onClick={handleClick}>
        <Typography variant="p" className="md:text-xl">Add book to {bookshelf_name}</Typography>
        </div>
    )
}

export default AddToBookshelf