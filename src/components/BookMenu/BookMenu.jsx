import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { TokenContext } from "../App/App";

function BookMenu({ leftElementClass, book_id }) {
    const token = useContext(TokenContext);
    const [liked, setLiked] = useState(false);
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        // Grab user favs from fav bookshelf to check if this book is in there
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

                const favsShelf = responseData.payload.filter(
                    (shelf) => shelf.system_flag === "favs"
                );

                const bookFavourited = favsShelf[0].bookshelf_books.some(
                    (id) => String(id) === String(book_id)
                );

                const completeShelf = responseData.payload.filter(
                    (shelf) => shelf.system_flag === "complete"
                );

                const bookCompleted = completeShelf[0].bookshelf_books.some(
                    (id) => String(id) === String(book_id)
                );

                return [bookFavourited, bookCompleted];
            } else if (!responseRequest.ok) {
                console.error(`Status: ${responseRequest.status}`);
                console.error(`Text: ${await responseRequest.text()}`);
                console.error("Data not available");
                return;
            }
        }

        getBookshelves()
            .then((payload) => {
                setLiked(payload[0]);
                setCompleted(payload[1])
            })
            .catch((error) => {
                console.error(`Error fetching: ${error}`);
            });
    }, [liked, completed]);

    async function likeButton() {
        async function updateFavs(action) {
            const fetchMethod = (() => {
                switch (!action) {
                    case true:
                        return "PATCH";
                    case false:
                        return "DELETE";
                }
            })();
            console.log(`book_id is:`);
            console.log(typeof book_id);
            const responseRequest = await fetch(
                `https://bookmarkd-server.onrender.com/api/fav?user_id=${token.user.id}&book_id=${book_id}`,
                {
                    method: `${fetchMethod}`,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (responseRequest.ok) {
                const responseData = await responseRequest.json();

                return responseData;
            } else if (!responseRequest.ok) {
                console.error(`Status: ${responseRequest.status}`);
                console.error(`Text: ${await responseRequest.text()}`);
                console.error("Data not available");
                return;
            }
        }
        setLiked((liked) => !liked);
        updateFavs(liked);
    }

    async function completedButton() {
        async function updateCompleted(action) {
            const fetchMethod = (() => {
                switch (!action) {
                    case true:
                        return "PATCH";
                    case false:
                        return "DELETE";
                }
            })();
            const responseRequest = await fetch(
                `https://bookmarkd-server.onrender.com/api/complete?user_id=${token.user.id}&book_id=${book_id}`,
                {
                    method: `${fetchMethod}`,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (responseRequest.ok) {
                const responseData = await responseRequest.json();

                return responseData;
            } else if (!responseRequest.ok) {
                console.error(`Status: ${responseRequest.status}`);
                console.error(`Text: ${await responseRequest.text()}`);
                console.error("Data not available");
                return;
            }
        }
        setCompleted((completed) => !completed);
        updateCompleted(completed);
    }

    const buttonStyling = "w-[10vw] md:w-auto md:h-[15%]";

    return (
        <Box
            className={`flex justify-around flex-row mt-[5vw] md:mt-[10vw]  ${leftElementClass}`}
        >
            <img
                className={`${buttonStyling}`}
                src={liked ? "/img/liked_icon.png" : "/img/not_liked_icon.png"}
                onClick={likeButton}
            />
            <img
                className={`${buttonStyling}`}
                src="/img/add_to_shelf_icon.png"
            />
            <img className={`${buttonStyling}`} src={completed ? "/img/completed_icon.png" : "/img/not_completed_icon.png"} onClick={completedButton}/>
        </Box>
    );
}

export default BookMenu;
