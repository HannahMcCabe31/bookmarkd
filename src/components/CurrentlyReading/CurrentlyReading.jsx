import { Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";
import { BookButton } from "../../definitions/CustomComponents";

function CurrentlyReading(props) {
  return (
    <ThemeProvider theme={bookmarkd}>
      <Link to="/book-page">
        <Box className="text-black border rounded-2xl bg-white p-2 border-element-blue border-4">
          <Box className="relative">
            <Box>
              <Typography className=" font-medium text-xl py-1" variant="h3">
                My Current Read
              </Typography>
            </Box>
            <BookButton
              className="absolute bg-element-blue top-0 end-0"
              size="small"
              variant="filled"
            >
              ▼
            </BookButton>
          </Box>

          <Box className="flex justify-evenly gap-x-5 mr-10">
            <Box className="relative w-[80vw] h-[40vw] overflow-hidden m-auto p-auto">
              <img
                src="/book_covers/neuromancer.webp"
                className="absolute m-auto p-auto top-0"
              />
            </Box>
            <Box className="font-light">
              <Typography className="font-medium" variant="h3">
                Neuromancer
              </Typography>
              <Typography className="font-medium" variant="p">
                Author:
              </Typography>
              <Typography
                className="text-center py-1 "
                display="block"
                variant="p"
              >
                William Gibson
              </Typography>
              <Typography className="font-medium" variant="p">
                Rating:
              </Typography>
              <Typography
                className="text-center py-1"
                display="block"
                variant="p"
              >
                3.90 / 5
              </Typography>
              <Typography className="font-medium" variant="p">
                Current Page:
              </Typography>
              <Typography
                className="text-center py-2"
                display="block"
                variant="p"
              >
                160 of 320
              </Typography>
              {/* <Button className="border rounded-full bg-element-blue text-white p-2  ">
                        <Box className="flex flex-row justify-between">
                          <Typography variant="p">Update Activity</Typography>{" "}
                        </Box>{" "}
                      </Button> */}
            </Box>
          </Box>
        </Box>
      </Link>
    </ThemeProvider>
  );
}

export default CurrentlyReading;
