import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { BookPageSlider } from "../../definitions/CustomComponents";

function BookSlider({ bookPageData }) {
    const [pageNumber, setPageNumber] = useState(80);

    const maxPages = bookPageData.number_of_pages;

    function handlePage(e, value) {
        setPageNumber(value);
    }

    return (
        <>
            <Box>
                <Box className="flex justify-center">
                    <BookPageSlider
                        className="p-0 mb-[2vw] mt-[4vw]"
                        aria-label="book progress slider"
                        defaultValue={80}
                        min={0}
                        max={maxPages}
                        onChange={handlePage}
                        disabled
                    />
                </Box>
                <Box className="flex justify-center mt-0 pt-0">
                    <Typography variant="subtitle">
                        {pageNumber} of {maxPages} pages
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default BookSlider;
