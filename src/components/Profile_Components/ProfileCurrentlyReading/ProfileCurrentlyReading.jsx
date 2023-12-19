import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProfileBookSlider from "../ProfileBookSlider/ProfileBookSlider.jsx";

function ProfileCurrentlyReading() {

  return (
      <div className="p-[3vw] md:p-0">
        <Typography variant="h5" className="md:text-2xl lg:text-3xl">
          Currently Reading
        </Typography>
        <Box className="bg-element-blue rounded-3xl my-3 p-3 md:p-1">
          <Box className="m-3">
            <Typography variant="h6" className="md:text-lg">
              The Wind in the Willows
            </Typography> 
    
            <Typography variant="h8" className="md:text-base">by Kenneth Grahame</Typography>
            <div>
              <ProfileBookSlider className="col-start-2 row-span-1" />
            </div>
          </Box>
          <Box className="m-3">
            <Typography variant="h6" className="md:text-lg">Neuromancer</Typography>

            <Typography variant="h8" className="md:text-base">by Ameenah Jalil</Typography>
            <div>
              <ProfileBookSlider className="col-start-2 row-span-1" />
            </div>
          </Box>
        </Box>
      </div>
  );
}

export default ProfileCurrentlyReading;
