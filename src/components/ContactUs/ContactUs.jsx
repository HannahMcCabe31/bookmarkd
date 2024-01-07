// import React from "react";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function ContactUs() {
    window.scrollTo(0, 0); // Reset page to top when page is first loaded

    return (
        <>
            <div
            //  className="md:max-w-[75%] md:pl-[20%]"
            >
                <Box className="mx-8">
                    <Link to="/settings">
                        <img
                            src={backArrow}
                            alt="backArrow"
                            className="w-8 h-8 mt-5 md:my-[5vh] md:w-[5vh] md:h-[5vh]"
                        />
                    </Link>
                    <Box className="md:hidden">
                        <Box className="p-10">
                            <Box className="flex flex-row justify-center">
                                <Typography
                                    variant="logo"
                                    className="text-white"
                                >
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
                        </Box>
                    </Box>
                    <Typography variant="p" className="text-white">
                        <Typography className="my-5" variant="h4">
                            Contact Us
                        </Typography>
                        <Typography
                            variant="p"
                            display="block"
                            className="md:text-[1.5rem] md:my-[1rem]"
                        >
                            We're always happy to hear from our readers and
                            users. Whether you have a question, suggestion, or
                            just want to say hi, feel free to reach out to us
                            using the form below.
                        </Typography>
                        <Box>
                            <Typography
                                variant="p"
                                className="md:text-[1.5rem] md:my-[4.5rem]"
                            >
                                General Inquiries:{" "}
                            </Typography>

                            <Typography
                                variant="p"
                                className="text-star-blue md:text-[1.5rem]"
                            >
                                Contact@bookmarkd.com
                            </Typography>

                            <Typography
                                variant="p"
                                display="block"
                                className="md:text-[1.5rem] md:my-[3rem]"
                            >
                                You can also find us on social media:
                            </Typography>

                            <Typography
                                variant="p"
                                className="flex flex-row mb-5 md:text-[1.5rem]"
                            >
                                Facebook:{" "}
                                <Typography
                                    className="text-star-blue md:text-[1.5rem] md:pl-2"
                                    variant="p"
                                >
                                    @bookmarkd
                                </Typography>
                            </Typography>

                            <Typography
                                variant="p"
                                className="flex flex-row mb-5 md:text-[1.5rem]"
                            >
                                Twitter:{" "}
                                <Typography
                                    variant="p"
                                    className="text-star-blue md:text-[1.5rem]  md:pl-2"
                                >
                                    @bookmarkd
                                </Typography>
                            </Typography>

                            <Typography
                                variant="p"
                                className="flex flex-row mb-5 md:text-[1.5rem]"
                            >
                                Instagram:{" "}
                                <Typography
                                    variant="p"
                                    className="text-star-blue md:text-[1.5rem] md:pl-2"
                                >
                                    @bookmarkd
                                </Typography>
                            </Typography>

                            <Typography
                                variant="p"
                                className="text-xl mt-[2rem] "
                            >
                                We hope to hear from you soon!
                            </Typography>
                            <br className="m-5" />
                            <Typography
                                variant="p"
                                className="md:text-xl md:my-[1rem]"
                            >
                                Please note that our response time may vary
                                depending on the volume of inquiries we receive.
                                We will do our best to respond to your message
                                within 24 hours.
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            </div>
        </>
    );
}

export default ContactUs;
