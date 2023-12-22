import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ProfileProgress from "../ProfileProgress/ProfileProgress";
import { Box, Button } from "@mui/material";
import { ProfileSlider } from "../../../definitions/CustomComponents";
import { useContext } from "react";
import { TokenContext } from "../../App/App";
import fetchPagesRead from "./fetchPagesRead";

function ProfileBookSlider({ book_pages, book_id, isOpen }) {
    const token = useContext(TokenContext);
    const [pageNumber, setPageNumber] = useState(0);
    const [progressModalOpen, setProgressModalOpen] = useState(false);

    const maxPages = book_pages || 999;

    useEffect(() => {
        if (token.user.id && book_id) {
            fetchPagesRead(token.user.id, book_id).then((payload) => {
                if (payload !== null) {
                    setPageNumber(payload);
                } else {
                    console.log("Error fetching page progress");
                }
            });
        }
    }, [book_id]);

    function handlePage(e, value) {
        setPageNumber(value);
    }

    function handleModalOpen() {
        setProgressModalOpen(true);
    }
    function handleModalClose() {
        setProgressModalOpen(false);
    }

    function handleProgressUpdate(pageNumber) {
        setPageNumber(pageNumber);
    }

    const percentage = Math.floor((pageNumber / maxPages) * 100);

    return (
        <>
            <div
                className="grid  grid-cols-[1fr, 1fr, 1fr] grid-rows-1 grid-flow-row-dense items-center space-x-5"
                onClick={handleModalOpen}
            >
                <Typography
                    variant="h7"
                    className="col-start-1 mb-3 md:text-sm lg:text-base"
                >
                    Progress:
                </Typography>
                <div className=" col-start-2 row-span-1">
                    <Box>
                        <ProfileSlider
                            className="p-0 mb-[2vw] mt-[4vw] md:m-2 max-w-[45vw] md:max-w-[15vw] lg:max-w-[18vw]"
                            valueLabelDisplay="auto"
                            aria-label="book slider"
                            value={percentage}
                            min={0}
                            max={100}
                            onChange={handlePage}
                            onClick={handleModalOpen}
                            width="1vw"
                            disabled
                        />
                    </Box>

                    <Box className="flex justify-center mt-0 pt-0">
                        <Typography
                            variant="subtitle"
                            className="md:text-sm lg:text-base"
                        >
                            {pageNumber} of {maxPages} pages
                        </Typography>
                    </Box>
                </div>
                <Typography
                    variant="h8"
                    className="col-start-3 mb-3 md:text-sm lg:text-base"
                >
                    {percentage}%
                </Typography>
            </div>
            {!progressModalOpen && (
        <div className="text-center">
          <Button 
          variant="contained" 
          onClick={handleModalOpen}
          className="bg-element-blue text-white rounded-lg"
          ><Typography variant="p" className="text-xs">Update Progress</Typography></Button>
        </div>)}
        <ProfileProgress
                isOpen={progressModalOpen}
                onClose={handleModalClose}
                onUpdateProgress={handleProgressUpdate}
                currentPageNumber={pageNumber}
            />
        </>
    );
}

export default ProfileBookSlider;
