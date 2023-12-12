import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { BookSlideBar } from "../../definitions/CustomComponents";

function BookSlider() {
    const [pageNumber, setPageNumber] = useState(160);

    const maxPages = 320;

    function handlePage(e, value) {
        setPageNumber(value);
    }

    return (
        <>
            <Box className="flex justify-center">
                <BookSlideBar
                    className="p-0 mb-[2vw] mt-[4vw]"
                    valueLabelDisplay="auto"
                    aria-label="book slider"
                    defaultValue={160}
                    min={0}
                    max={maxPages}
                    onChange={handlePage}
                />
            </Box>
            <Box className="flex justify-center mt-0 pt-0">
                <Typography variant="subtitle">
                    {pageNumber} of {maxPages} pages
                </Typography>
            </Box>
        </>
    );
}

export default BookSlider;
