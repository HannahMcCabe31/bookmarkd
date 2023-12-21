import { useState, useEffect } from "react";
import { Box, Snackbar } from "@mui/material";
import { useContext } from "react";
import { TokenContext } from "../App/App";

function BookMenu({
    leftElementClass,
    book_id,
    bookshelfEditMode,
    completed,
    setCompleted
}) {
    const token = useContext(TokenContext);
    const [liked, setLiked] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [completedSnackbarOpen, setCompletedSnackbarOpen] = useState(false);

    function handleSnackbarClose(_event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
        setCompletedSnackbarOpen(false);
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

                setLiked(bookFavourited);
                setCompleted(bookCompleted);
            } else {
                console.error(`Status: ${responseRequest.status}`);
                console.error(`Text: ${await responseRequest.text()}`);
                console.error("Data not available");
            }
        }

        getBookshelves();
    }, [token.user.id, book_id]);

    async function likeButton() {
        setLiked((prevLiked) => !prevLiked);

        const method = liked ? "DELETE" : "PATCH";
        const responseRequest = await fetch(
            `https://bookmarkd-server.onrender.com/api/fav?user_id=${token.user.id}&book_id=${book_id}`,
            {
                method: method,
                headers: {
                    Accept: "application/json",
                },
            }
        );

        if (responseRequest.ok) {
            const responseData = await responseRequest.json();
            setSnackbarOpen(true);

            return responseData;
        } else if (!responseRequest.ok) {
            console.error(`Status: ${responseRequest.status}`);
            console.error(`Text: ${await responseRequest.text()}`);
            console.error("Data not available");
            return;
        }
    }

    async function completedButton() {
        setCompleted((prevCompleted) => !prevCompleted);

        const method = completed ? "DELETE" : "PATCH";
        const responseRequest = await fetch(
            `https://bookmarkd-server.onrender.com/api/complete?user_id=${token.user.id}&book_id=${book_id}`,
            {
                method: method,
                headers: {
                    Accept: "application/json",
                },
            }
        );

        if (responseRequest.ok) {
            const responseData = await responseRequest.json();
            setCompletedSnackbarOpen(true);

            return responseData;
        } else if (!responseRequest.ok) {
            setCompleted((prevCompleted) => !prevCompleted); // Revert the completed state if the request fails
            console.error(`Status: ${responseRequest.status}`);
            console.error(`Text: ${await responseRequest.text()}`);
            console.error("Data not available");
            return;
        }
    }

    const buttonStyling = "w-[10vw] md:w-auto md:h-[15%]";

    return (
        <>
            <Box
                className={`flex justify-around flex-row mt-[5vw] md:mt-[10vw] ${leftElementClass}`}
            >
                <img
                    className={`${buttonStyling}`}
                    src={
                        liked
                            ? "/img/liked_icon.png"
                            : "/img/not_liked_icon.png"
                    }
                    onClick={likeButton}
                />
                <img
                    onClick={bookshelfEditMode}
                    className={`${buttonStyling}`}
                    src="/img/add_to_shelf_icon.png"
                />
                <img
                    className={`${buttonStyling}`}
                    src={
                        completed
                            ? "/img/completed_icon.png"
                            : "/img/not_completed_icon.png"
                    }
                    onClick={completedButton}
                />
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={
                    liked ? "Added to favourites" : "Removed from favourites"
                }
            />
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={completedSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={
                    completed
                        ? "Added to completed books"
                        : "Removed from completed books"
                }
            />
        </>
    );
}

export default BookMenu;
