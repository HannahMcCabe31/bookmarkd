import { useState, useEffect } from "react";
import ProfileBookshelves from "../Profile_Components/ProfileBookshelves/ProfileBookshelves";
import ProfileStatistics from "../Profile_Components/ProfileStatistics/ProfileStatistics";
import ProfileCurrentlyReading from "../Profile_Components/ProfileCurrentlyReading/ProfileCurrentlyReading";
import WelcomeUser from "../WelcomeUser/WelcomeUser";

import { useContext } from "react";
import { TokenContext } from "../App/App";

// create container to render bookshelf components within

function Profile() {
    const token = useContext(TokenContext);
    console.log(`Token:`)
    console.log(token)

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
                });
        }
    }, []);

    return (
        <>
            <div className="text-white md:m-auto md:pr-5 md:max-w-[640px]">
                <div className="mt-5 flex flex-row">
                    <WelcomeUser token={token} />
                </div>
                <div className="md:grid md:grid-cols-4 md:mt-10">
                    <div className="md:col-start-3 md:col-span-2 ">
                        <ProfileCurrentlyReading />
                        <ProfileStatistics />
                    </div>
                    <div className="md:col-start-1 md:col-end-3 md:row-start-1">
                        <ProfileBookshelves bookshelves={bookshelves} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
