import BookSlider from "../BookSlider/BookSlider";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function BookInfo() {
    return (
        <ThemeProvider theme={bookmarkd}>
            <Typography variant="h2" className="m-auto p-auto mt-2">
                Neuromancer
            </Typography>
            <Typography variant="p" className="m-auto p-auto mt-0">
                William Gibson
            </Typography>
            <Typography
                variant="h3"
                className="mx-auto my-0 p-auto pt-5 pb-0 mb-0"
            >
                ★★★★☆
            </Typography>
            <Typography variant="subtitle" className="m-auto p-auto">
                3,203 ratings
            </Typography>

            <BookSlider />
            <Box className="truncate m-auto p-4 rounded-2xl bg-element-blue h-48 w-10/12">
                <Typography variant="p" className="m-auto p-auto mt-4">
                    
                </Typography>
            </Box>
        </ThemeProvider>
    );
}

export default BookInfo;
