import { useState, useEffect } from "react";
import ProfileBookshelves from "../Profile_Components/ProfileBookshelves/ProfileBookshelves";
import ProfileStatistics from "../Profile_Components/ProfileStatistics/ProfileStatistics";
import ProfileCurrentlyReading from "../Profile_Components/ProfileCurrentlyReading/ProfileCurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import { CircularProgress } from "@mui/material";

import { useContext } from "react";
import { TokenContext } from "../App/App";

// create container to render bookshelf components within

function Profile() {
    window.scrollTo(0, 0); // Reset page to top when page is first loaded

    const [pageLoaded, setPageLoaded] = useState(false);
    const [loadTimeout, setLoadTimeout] = useState(false);

    const token = useContext(TokenContext);

    const [bookshelves, setBookshelves] = useState();

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
                })
                .then(setPageLoaded(true));
        }
    }, []);

    useEffect(() => {
        if (pageLoaded) {
            console.log(`pageLoaded is now true!`);
            setTimeout(() => {
                console.log(`and after 2.5 seconds...`);
                setLoadTimeout(true);
            }, 1500);
        }
    }, [pageLoaded]);

    useEffect(() => {
        if (loadTimeout) {
            document.body.style.overflow = "scroll"; // Enable scrolling once page is loaded
        } else {
            document.body.style.overflow = "hidden"; // Disable scrolling while loading...
        }
    }, [loadTimeout]);

    return (
        <>
            {!loadTimeout && (
                <div
                    className={`z-[9999] absolute top-0 right-0 h-[100%] w-[100%] bg-background-blue`}
                ><div className="m-auto pt-[50%] p-auto text-center items-center"><CircularProgress /></div></div>
            )}
            <div className="text-white md:m-auto md:pr-5 md:max-w-[640px]">
                <div className="mt-5 flex flex-row px-[3vw] md:px-0">
                    <WelcomeUser token={token} />
                </div>
                <div className="md:grid md:grid-cols-4 md:mt-10">
                    <div className="md:col-start-3 md:col-span-2 ">
                        <ProfileCurrentlyReading />
                        <ProfileStatistics />
                    </div>
                    <div className="md:col-start-1 md:col-end-3 md:row-start-1  md:px-0 px-[3vw]">
                        <ProfileBookshelves bookshelves={bookshelves} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
