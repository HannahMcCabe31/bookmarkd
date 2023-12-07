import Typography from "@mui/material/Typography"
import { ThemeProvider } from "@mui/material/styles"
import { bookmarkd } from "../../definitions/bookmarkdTheme"

function BookSlider() {
    return (
        <ThemeProvider theme={bookmarkd}>
        <Typography variant="h2" className="m-auto p-auto mt-4">Book Slider</Typography>
        </ThemeProvider>
    )
}

export default BookSlider