import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@mui/material";
import AddToBookshelf from "../AddToBookshelf/AddToBookshelf";
import { TokenContext } from "../App/App";

function AddToBookshelfContainer({ bookshelfEditMode }) {
    const token = useContext(TokenContext);
    const [editableShelves, setEditableShelves] = useState([]);

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
            {editableShelves.map((shelf, i) => {
                return (
                    <AddToBookshelf
                        key={`editShelf_${i}`}
                        bookshelf_id={shelf.bookshelf_id}
                        bookshelf_name={shelf.bookshelf_name}
                        bookshelfEditMode={bookshelfEditMode}
                    />
                );
            })}
        </>
    );
}

export default AddToBookshelfContainer;
