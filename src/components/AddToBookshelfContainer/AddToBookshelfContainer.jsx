import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import AddToBookshelf from "../AddToBookshelf/AddToBookshelf";
import { TokenContext } from "../App/App";
import addNewBookshelf from "./addNewBookshelf";
import { AddBookshelfBar } from "../../definitions/CustomComponents";

function AddToBookshelfContainer({ bookshelfEditMode, book_id }) {
    const token = useContext(TokenContext);
    const [editableShelves, setEditableShelves] = useState([]);
    const [addShelfMode, setAddShelfMode] = useState(false);
    const [newBookshelfName, setNewBookshelfName] = useState("");

    function handleUpdateBookshelf(e) {
        setNewBookshelfName(e.target.value);
    }

    function addBookshelfMode() {
        setAddShelfMode((mode) => !mode);
    }

    // Need to make a new div that'll call handleAddNewBookshelf with
    function handleAddNewBookshelf() {
        if (newBookshelfName.length > 0) {
            addNewBookshelf(token.user.id, newBookshelfName, book_id);
        }
        addBookshelfMode();
        bookshelfEditMode();
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
            {addShelfMode && (
                <div
                    className="z-[15000] absolute top-0 right-0 h-[100%] w-[100%] bg-[#000000DD]"
                    desc="Box to add new bookshelf"
                >
                    <AddBookshelfBar
                        className="absolute top-[50%] left-[15%] bg-element-blue border-element-blue rounded-[5vw] m-auto w-[70%]"
                        placeholder="New bookshelf name..."
                        inputProps={{
                            "aria-label": "search",
                            style: { color: "white" },
                        }}
                        color="starBlue"
                        variant="outlined"
                        onChange={handleUpdateBookshelf}
                    />
                    <div
                        className="absolute top-[65%] left-[30%] justify-center text-center w-[40%] m-auto p-auto py-[1vw] border-2 rounded-2xl border-heart-red hover:border-white hover:bg-[#FFFFFF15] transition ease-in-out"
                        onClick={handleAddNewBookshelf}
                    >
                        <Typography variant="p" className="md:text-xl">
                            Add bookshelf
                        </Typography>
                    </div>
                </div>
            )}

            <div
                tag="Container for all the bookshelves"
                className=" absolute w-[100%] max-h-[50%] h-[50%] overflow-scroll"
            >
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
                    onClick={addBookshelfMode}
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
