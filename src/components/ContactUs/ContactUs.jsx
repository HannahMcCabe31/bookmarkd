// import React from "react";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ContactUs() {
  return (
    <>
      <Link to="/settings">
        <img src={backArrow} alt="backArrow" className="w-8 h-8 mt-5" />
      </Link>
      <Box className="p-10">
        <Box className="flex flex-row justify-center">
          <Typography variant="logo" className="text-white">
            book
            <Typography
              display="inline"
              variant="logo"
              className="text-star-blue"
            >
              mark
            </Typography>
            d
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            className="flex flex-row justify-center text-white"
          >
            by readers, for readers
          </Typography>
        </Box>
        <Typography variant="body2" className="text-white">
          <Typography className="my-5" variant="h4">
            Contact Us
          </Typography>
          <Typography variant="body2">
            We're always happy to hear from our readers and users. Whether you
            have a question, suggestion, or just want to say hi, feel free to
            reach out to us using the form below.
          </Typography>
          <Box>
            <Typography variant="body2">General Inquiries: </Typography>

            <Typography variant="body2" className="text-star-blue">
              Contact@bookmarkd.com
            </Typography>

            <Typography variant="body2" className="mb-5">
              You can also find us on social media:
            </Typography>

            <Typography variant="body2" className="flex flex-row mb-5">
              Facebook:{" "}
              <Typography className="text-star-blue" variant="body2">
                @bookmarkd
              </Typography>
            </Typography>

            <Typography variant="body2" className="flex flex-row mb-5">
              Twitter:{" "}
              <Typography variant="body2" className="text-star-blue">
                @bookmarkd
              </Typography>
            </Typography>

            <Typography variant="body2" className="flex flex-row mb-5">
              Instagram:{" "}
              <Typography variant="body2" className="text-star-blue">
                @bookmarkd
              </Typography>
            </Typography>

            <Typography variant="body2" className="mb-7">
              We hope to hear from you soon!
            </Typography>

            <Typography variant="body2">
              Please note that our response time may vary depending on the
              volume of inquiries we receive. We will do our best to respond to
              your message within 24 hours.
            </Typography>
          </Box>
        </Typography>
      </Box>
    </>
  );
}

export default ContactUs;
