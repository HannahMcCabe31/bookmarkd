import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { BookSlideBar } from "../../definitions/CustomComponents";

function BookSlider({bookPageData}) {
    const [pageNumber, setPageNumber] = useState(10);

    const maxPages = bookPageData.number_of_pages;

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
                    defaultValue={10}
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
