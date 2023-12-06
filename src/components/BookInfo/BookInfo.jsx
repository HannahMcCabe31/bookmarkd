import BookSlider from "../BookSlider/BookSlider"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { ThemeProvider } from "@mui/material/styles"
import { bookmarkd } from "../../definitions/bookmarkdTheme"



function BookInfo() {
    return (
        <ThemeProvider theme={bookmarkd}>
            <img src="placeholder" className="w-10/12 row-span-1 m-auto p-auto" />       
            <Typography variant="h2" className="row-span-2 m-auto p-auto mt-4">Neuromancer</Typography>
            <BookSlider />
            <Typography variant="p" className="row-span-2 m-auto p-auto mt-4">This is a nice description of the book</Typography>
        </ThemeProvider>
    )
}

export default BookInfo