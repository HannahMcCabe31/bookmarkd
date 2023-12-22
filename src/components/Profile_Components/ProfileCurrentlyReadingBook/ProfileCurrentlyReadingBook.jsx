import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProfileBookSlider from "../ProfileBookSlider/ProfileBookSlider.jsx";

function ProfileCurrentlyReadingBook({book_title, book_author, book_pages, book_id}) {
    return (
        <Box className="m-3">
            <Typography variant="h6" className="md:text-lg">
               {book_title ? book_title : `Loading...`}
            </Typography>

            <Typography variant="h8" className="md:text-base">
            {book_author ? book_author : `Loading...`}
            </Typography>
            <div>
                <ProfileBookSlider className="col-start-2 row-span-1" book_pages={book_pages} book_id={book_id}/>
            </div>
        </Box>
    );
}

export default ProfileCurrentlyReadingBook