import { useState, useEffect } from "react";
import ProfileCurrentlyReading from "../Profile_Components/ProfileCurrentlyReading/ProfileCurrentlyReading";
import ProfileStatistics from "../Profile_Components/ProfileStatistics/ProfileStatistics";
import Typography from "@mui/material/Typography";
import ProfileBookshelves from "../Profile_Components/ProfileBookshelves/ProfileBookshelves";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";

// create container to render bookshelf components within

function Profile(props) {
    const [bookshelves, setBookshelves] = useState();

    const token = props.token;

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
                return responseData.payload;
            } else if (!responseRequest.ok) {
                console.error(`Status: ${responseRequest.status}`);
                console.error(`Text: ${await responseRequest.text()}`);
                console.error("Data not available");
                return;
            }
        }
        if (token) {
 

            getBookshelves()
                .then((payload) => {
                    setBookshelves(payload);
                })
                .catch((error) => {
                    console.error(`Error fetching: ${error}`);
                });
        }
    }, []);

    return (
        <>
            <div className="text-white p-[5vw]">
                <WelcomeUser token={token} />
                <ProfileCurrentlyReading />
                <ProfileStatistics />
                <ProfileBookshelves bookshelves={bookshelves} />
            </div>
        </>
    );
}

export default Profile;
