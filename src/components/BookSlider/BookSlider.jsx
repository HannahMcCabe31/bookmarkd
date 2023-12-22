import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { BookPageSlider } from "../../definitions/CustomComponents";
import BookProgress from "../BookPageProgress/BookPageProgress";

function BookSlider({ bookPageData, completed }) {
    const [pageNumber, setPageNumber] = useState(80);
    const [progressModalOpen, setProgressModalOpen] = useState(false);

    const maxPages = bookPageData.number_of_pages || 1;

    useEffect(() => {
        if (completed) {
            setPageNumber(maxPages);
        }
    }, [completed]);

    function handlePage(e, value) {
        setPageNumber(value);
    }

    function handleModalOpen(e) {
        // console.log("modal open")
        e.stopPropagation();
        if (!progressModalOpen) {
            setProgressModalOpen(true);
        }
    }

    function handleModalClose() {
        // console.log("modal closed")
        setProgressModalOpen(false);
    }

    function handleProgressUpdate(pageNumber) {
        setPageNumber(pageNumber);
    }

    const percentage = Math.floor((pageNumber / maxPages) * 100);

    console.log("progress modal open in bookslider: ", progressModalOpen);

    return (
        <>
            <Box onClick={handleModalOpen}>
                <Box className="flex justify-center">
                    <BookPageSlider
                        className="p-0 mb-[2vw] mt-[4vw]"
                        aria-label="book progress slider"
                        defaultValue={80}
                        min={0}
                        max={100}
                        onChange={handlePage}
                        value={percentage}
                        disabled
                    />
                </Box>
                <Box className="flex justify-center mt-0 pt-0">
                    <Typography variant="subtitle" className="md:text-2xl">
                        {pageNumber} of {maxPages} pages
                    </Typography>
                </Box>
                <BookProgress
                    isOpen={progressModalOpen}
                    onClose={handleModalClose}
                    onUpdateProgress={handleProgressUpdate}
                    currentPageNumber={pageNumber}
                    bookPageData={bookPageData}
                />
                {!progressModalOpen && (
                <Button className="text-white" onClick={handleModalOpen}>Update Progress</Button>
                )}
            </Box>
        </>
    );
}

export default BookSlider;
