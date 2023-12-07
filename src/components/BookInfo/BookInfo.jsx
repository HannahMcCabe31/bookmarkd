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
                className="mx-auto my-0 p-auto pt-[5vw] pb-0 mb-0"
            >
                ★★★★☆
            </Typography>
            <Typography variant="subtitle" className="m-auto p-auto">
                3,203 ratings
            </Typography>
            <BookSlider />
            <Box className="flex text-ellipsis overflow-hidden m-auto px-[3vw] rounded-2xl bg-element-blue mt-[3vw] w-[80vw] h-[40vw] text-center items-center">
                <Typography variant="p" className="m-auto p-auto">
                    This is the book description, it is quite long but hopefully won't go off the sides of the screen This is the book description, it is quite long but hopefully won't go off the sides of the screen This is the book description, it is quite long but hopefully won't go off the sides of the screen 
                </Typography>
            </Box>
        </ThemeProvider>
    );
}

export default BookInfo;
