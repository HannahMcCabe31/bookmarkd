import React from "react";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";

const AIPowered = () => {
  return (
    <>
      <Link to="/settings">
        <img src={backArrow} alt="backArrow" className="w-8 h-8" />
      </Link>
      <div>
        <h1 className="text-white">AIPowered</h1>
      </div>
    </>
  );
};

export default AIPowered;
// // import React from "react";
// import backArrow from "../../assets/BackArrow.svg";
// import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// import { bookmarkd } from "../../definitions/bookmarkdTheme";

// function TermsConditions() {
//   return (
//     <>
//       <ThemeProvider theme={bookmarkd}>
//         <Link to="/settings">
//           <img src={backArrow} alt="backArrow" className="w-8 h-8 mt-5" />
//         </Link>
//         <Box className="flex flex-row justify-center">
//           <Typography variant="logo" className="text-white">
//             book
//             <Typography
//               display="inline"
//               variant="logo"
//               className="text-star-blue"
//             >
//               mark
//             </Typography>
//             d
//           </Typography>
//         </Box>
//         <Box>
//           <Typography
//             variant="h4"
//             className="flex flex-row justify-center text-white"
//           >
//             by readers, for readers
//           </Typography>
//         </Box>
//         <Typography variant="h4" className="text-white">
//           Terms & Conditions
//         </Typography>
//         <Typography variant="p"></Typography>
//       </ThemeProvider>
//     </>
//   );
// }

// export default TermsConditions;

