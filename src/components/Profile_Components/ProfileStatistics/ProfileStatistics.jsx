import flame from "../../../assets/Flame.svg";
import PagesRead from "../../../assets/PagesRead.svg";
import BooksRead from "../../../assets/BooksRead.svg";
import { useContext, useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../../definitions/bookmarkdTheme.jsx";
import useUserData from "./useUserData.js";
import { TokenContext } from "../../App/App";

function ProfileStatistics() {
    const [userData, setUserData] = useState(null);
    const token = useContext(TokenContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const payload = await useUserData(token);
                if (payload) {
                    setUserData(payload);
                } else {
                    console.log("No payload received");
                }
            } catch (error) {
                console.error(`Error in fetchData: ${error}`);
            }
        }

        if (token) {
            fetchData();
        }
    }, []);

    return (
        <ThemeProvider theme={bookmarkd}>
            <div className="p-3">
                <Typography variant="h5" className="text-white">
                    Your Statistics
                </Typography>

                <Box className="bg-element-blue rounded-3xl grid grid-cols-3 mt-3 p-3">
                    {/* While waiting for userData to pull in from the back-end, display a loading circle :) */}
                    {!userData && <CircularProgress />}
                    {/* Once userData has loaded in from the fetch request, display the data */}
                    {userData && (
                        <>
                            <div className="m-3">
                                <div>
                                    <img
                                        src={BooksRead}
                                        alt="Books read"
                                        className="ml-5 mb-5"
                                    />
                                </div>
                                <div className="">
                                    <Typography variant="h4">
                                        Total Books Read:
                                        <Typography variant="stats">
                                            24
                                        </Typography>
                                    </Typography>
                                </div>
                            </div>
                            <div className="m-2">
                                <img
                                    src={PagesRead}
                                    alt="Pages read"
                                    className="ml-5 mb-3"
                                />
                                <Typography variant="h4">
                                    Total Pages Read:
                                    <Typography variant="stats">20k</Typography>
                                </Typography>
                            </div>
                            <div className="mx-3 mt-2">
                                <img
                                    src={flame}
                                    alt="Flame"
                                    className="ml-5 mb-3"
                                />
                                <Typography variant="h4">
                                    Reading Streak:
                                    <Typography variant="stats">
                                        {userData.reading_streak}
                                    </Typography>
                                </Typography>
                            </div>
                        </>
                    )}
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default ProfileStatistics;
