import { useState } from 'react'
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { bookmarkd } from "../../../definitions/bookmarkdTheme";
import { BookSlideBar } from "../../../definitions/CustomComponents";

function ProfileBookSlider() {

const [pageNumber, setPageNumber] = useState(160)

const maxPages = 320

function handlePage(e, value) {
    setPageNumber(value)
}

const percentage = Math.floor((pageNumber/maxPages) * 100)


    return (
      <ThemeProvider theme={bookmarkd}>
        <div className="grid  grid-cols-[1fr, 1fr, 1fr] grid-rows-1 grid-flow-row-dense items-center space-x-5">
          <Typography variant="h7" className="col-start-1 mb-3 md:text-xs">
            Progress:
          </Typography>
<div className=" col-start-2 row-span-1">
          <Box >
            <BookSlideBar
              className="p-0 mb-[2vw] mt-[4vw] md:m-2 max-w-[45vw] md:max-w-[15vw] lg:max-w-[18vw]"
              valueLabelDisplay="auto"
              aria-label="book slider"
              defaultValue={160}
              min={0}
              max={maxPages}
              onChange={handlePage}
            />
          </Box>

          <Box className="flex justify-center mt-0 pt-0">
            <Typography variant="subtitle" className="md:text-xs">
              {pageNumber} of {maxPages} pages
            </Typography>
          </Box>
</div>
          <Typography variant="h8" className="col-start-3 mb-3 md:text-xs">
            {percentage}%
          </Typography>
        </div>
      </ThemeProvider>
    );
}

export default ProfileBookSlider;
