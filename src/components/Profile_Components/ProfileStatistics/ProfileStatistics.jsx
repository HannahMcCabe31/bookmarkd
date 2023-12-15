import { useContext, useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../../definitions/bookmarkdTheme.jsx";
import useUserData from "./useUserData.js";
import { TokenContext } from "../../App/App";
import Statistics from "../Statistics/Statistics.jsx";


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
    }, [token]);

    return (
      <ThemeProvider theme={bookmarkd}>
        <div className="p-3 md:p-0 lg:p-0">
          <Typography
            variant="h5"
            className="text-white md:text-xl lg:text-xl"
          >
            Your Statistics
          </Typography>

          <Box className="bg-element-blue rounded-3xl grid grid-cols-3 mt-3 p-3 md:p-2">
            {/* While waiting for userData to pull in from the back-end, display a loading circle :) */}
            {!userData && <CircularProgress />}
            {/* Once userData has loaded in from the fetch request, display the data */}
            {userData && <Statistics userData={userData} />}
          </Box>
        </div>
      </ThemeProvider>
    );
}

export default ProfileStatistics;
