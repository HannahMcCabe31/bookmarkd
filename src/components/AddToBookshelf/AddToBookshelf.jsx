import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function AddToBookshelf({bookshelf_id, bookshelf_name, bookshelfEditMode}) {
    return (
        <div className="justify-center text-center w-[90%] m-auto p-auto py-[1vw] border-2 rounded-2xl border-star-blue hover:border-white hover:bg-[#FFFFFF15] transition ease-in-out" onClick={bookshelfEditMode}>
        <Typography variant="h3">Add book to {bookshelf_name}</Typography>
        </div>
    )
}

export default AddToBookshelf