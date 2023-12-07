import { useState } from 'react'
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { BookSlideBar } from "../../definitions/CustomComponents";

function BookSlider() {

const [pageNumber, setPageNumber] = useState(160)

const maxPages = 320

function handlePage(e, value) {
    setPageNumber(value)
}



    return (
        <ThemeProvider theme={bookmarkd}>
            <Box className="flex justify-center">
                <BookSlideBar
                    valueLabelDisplay="auto"
                    aria-label="book slider"
                    defaultValue={160}
                    min={0}
                    max={maxPages}
                    onChange={handlePage}
                />
                            </Box>
                            <Box className="flex justify-center mt-0 pt-0">
                <Typography variant="subtitle">{pageNumber} of {maxPages} pages</Typography>
                </Box>

        </ThemeProvider>
    );
}

export default BookSlider;
