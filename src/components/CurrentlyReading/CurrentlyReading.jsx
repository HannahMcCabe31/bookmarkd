import { Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import {Box, Button} from "@mui/material"
import Typography from "@mui/material/Typography"
import { ThemeProvider } from "@mui/material/styles"
import {bookmarkd} from "../../definitions/bookmarkdTheme"

function CurrentlyReading(props) {
    return(
      <ThemeProvider theme={bookmarkd}>
        <Link to="/book-page">
                <Box className="text-black border rounded-2xl bg-white p-4 border-element-blue border-4">
                  <Button className="border rounded-full bg-element-blue text-white p-2  ">
                    <Box className="flex flex-row justify-between">
                      <Typography variant="p">My Current Read</Typography>{" "}
                      <img className="w-4" src={rightArrow} alt="Right arrow" />
                    </Box>{" "}
                  </Button>

                  <Box className="flex mx-5 justify-evenly">
                    <Box className="w-36 h-44 my-auto bg-black border rounded-md"></Box>
                    <Box className="font-light">
                      <Typography className="font-medium" variant="h3">Neuromancer</Typography>
                      <Typography className="font-medium" variant="subtitle">Author:</Typography>
                      <Typography className="text-center py-1 " display="block" variant="subtitle">William Gibson</Typography>
                      <Typography className="font-medium" variant="subtitle">Rating:</Typography>
                      <Typography className="text-center py-1" display="block"variant="subtitle">3.90 / 5</Typography>
                      <Typography className="font-medium" variant="subtitle">Current Page:</Typography>
                      <Typography className="text-center py-2" display="block" variant="subtitle">160 of 320</Typography>
                      <Button className="border rounded-full bg-element-blue text-white p-2  ">
                        <Box className="flex flex-row justify-between">
                          <Typography variant="subtitle">Update Activity</Typography>{" "}
                        </Box>{" "}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Link>
              </ThemeProvider>
             
    )
}

export default CurrentlyReading