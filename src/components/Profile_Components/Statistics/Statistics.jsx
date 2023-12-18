import { Typography } from "@mui/material"
import flame from "../../../assets/Flame.svg";
import PagesRead from "../../../assets/PagesRead.svg";
import BooksRead from "../../../assets/BooksRead.svg";


function Statistics({userData}) {
    return (
      <>
        <div className="m-3">
          <div>
            <img src={BooksRead} alt="Books read" className="ml-5 mb-5" />
          </div>
          <div>
            <Typography variant="h4" className="md:text-sm">
              Books <br></br> Read:
          
              <Typography variant="stats" className="md:text-2xl">
                {" "}
                24
                </Typography>
       
            </Typography>
          </div>
        </div>
        <div className="m-2">
          <img src={PagesRead} alt="Pages read" className="ml-5 mb-3" />
          <Typography variant="h4" className="md:text-sm">
            Pages <br></br> Read:
         
          
            <Typography variant="stats" className="md:text-2xl">
              {" "}
              20k
              </Typography>
       
          </Typography>
        </div>
        <div className="mx-3 mt-2">
          <img src={flame} alt="Flame" className="ml-5 mb-3" />
          <Typography variant="h4" className="md:text-sm">
            Reading <br></br> Streak:
      
            
            <Typography variant="stats" className="md:text-2xl">
              {" "}
              {userData.reading_streak}
              </Typography>
           
          </Typography>
        </div>
      </>
    );
}

export default Statistics