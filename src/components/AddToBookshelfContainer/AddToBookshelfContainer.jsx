import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import AddToBookshelf from "../AddToBookshelf/AddToBookshelf";
import { TokenContext } from "../App/App";
import addNewBookshelf from "./addNewBookshelf";

function AddToBookshelfContainer({ bookshelfEditMode, book_id }) {
    const token = useContext(TokenContext);
    const [editableShelves, setEditableShelves] = useState([]);

    function handleAddNewBookshelf() {
        const bookshelfName = prompt()
        addNewBookshelf(token.user.id, bookshelfName, book_id)
        bookshelfEditMode()
    }

    useEffect(() => {
        async function getBookshelves() {
            const responseRequest = await fetch(
                `https://bookmarkd-server.onrender.com/api/bookshelves?user_id=${token.user.id}`,
                {
                    method: `GET`,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (responseRequest.ok) {
                const responseData = await responseRequest.json();
                const editableBookshelves = responseData.payload.filter(
                    (shelf) => shelf.system_flag === null
                );
                return editableBookshelves;
            } else {
                console.error(`Status: ${responseRequest.status}`);
                console.error(`Text: ${await responseRequest.text()}`);
                console.error("Data not available");
            }
        }

        getBookshelves()
            .then((payload) => {
                setEditableShelves(payload);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
        <div tag="Container for all the bookshelves" className=" absolute w-[100%] max-h-[50%] h-[50%] overflow-scroll">
            {editableShelves.map((shelf, i) => {
                return (
                    <AddToBookshelf
                        key={`editShelf_${i}`}
                        bookshelf_id={shelf.bookshelf_id}
                        bookshelf_name={shelf.bookshelf_name}
                        bookshelfEditMode={bookshelfEditMode}
                        token={token}
                        book_id={book_id}
                    />
                );
            })}
            <div
                className="justify-center text-center w-[90%] m-auto p-auto py-[1vw] mt-[1vw] border-2 rounded-2xl border-heart-red hover:border-white hover:bg-[#FFFFFF15] transition ease-in-out"
                 onClick={handleAddNewBookshelf}
            >
                <Typography variant="p" className="md:text-xl">
                    Add to new bookshelf!
                </Typography>
            </div>
            </div>
        </>
    );
}

export default AddToBookshelfContainer;
