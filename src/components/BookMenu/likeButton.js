import React, { useState } from "react";



async function likeButton() {
    const [liked, setLiked] = useState(false);
    
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

export default likeButton;
