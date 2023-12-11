

import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function PrivacyPolicy() {
  return (
    <>
      <ThemeProvider theme={bookmarkd}>
        <Link to="/settings">
          <img src={backArrow} alt="backArrow" className="w-8 h-8 mt-5" />
        </Link>
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
        <Typography variant="h4" className="text-white my-8">
          Privacy Policy
        </Typography>
        <Typography className="text-white" variant="body2">
          
        <Typography variant="body2"> Effective Date: November 30, 2023 </Typography>


        <Typography variant="body2"> Introduction </Typography>

        <Typography variant="body2"> Bookmarkd is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website, use our mobile application, or purchase a product or service from us.
Information We Collect
We collect the following types of information from you:</Typography>

<Typography variant="body2">Information you provide to us. This includes information you provide when you create an account, sign up for a newsletter, or contact us for customer support. This information may include your name, email address, phone number, and mailing address.</Typography>

<Typography variant="body2">Information we collect automatically. This includes information about your device, browser, and IP address. We may also collect information about your browsing behavior on our website, such as the pages you visit and the links you click.</Typography>

<Typography variant="body2">Information from third-party sources. We may collect information about you from third-party sources, such as public records and social media platforms.</Typography>

<Typography variant="body2">How We Use Your Information</Typography>

<Typography variant="body2">We use your information for the following purposes:</Typography>

<Typography variant="body2">To provide our services. We use your information to provide you with our products and services, such as creating bookmarks, managing your bookmarks, and recommending books to you.</Typography>

<Typography variant="body2">To improve our services. We use your information to improve our products and services, such as by identifying and fixing bugs and by developing new features.
To communicate with you. We use your information to communicate with you about your account, our products and services, and other matters.</Typography>

<Typography variant="body2">To send you marketing communications. We may use your information to send you marketing communications, such as emails about new products and services. You can unsubscribe from these communications at any time.</Typography>

<Typography variant="body2">Disclosure of Your Information
We may disclose your information to the following parties:
Our service providers. We use service providers to help us provide our products and services, such as hosting our website and processing payments. These service providers may have access to your information, but they are not authorized to use it for their own purposes.</Typography>

<Typography variant="body2">Third-party partners. We may share your information with third-party partners, such as booksellers and authors. These partners may use your information to send you marketing communications about their products and services.
Law enforcement and government agencies. We may disclose your information to law enforcement and government agencies if we are required to do so by law.</Typography>

<Typography variant="body2">Your Choices
You have the following choices regarding your information:
You can access and update your information. You can access and update your information by logging into your account.
You can unsubscribe from marketing communications. You can unsubscribe from marketing communications by clicking on the "unsubscribe" link in any marketing email you receive.
You can delete your account. You can delete your account by contacting us.</Typography>

<Typography variant="body2">Data Security
We use reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
Changes to This Privacy Policy
We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated Privacy Policy on our website and by sending you an email.
Contact Us
If you have any questions about this Privacy Policy, please contact us at:
Bookmarkd [email protected]</Typography>
   </Typography>  
</ThemeProvider> 
    </>
     
  );
}

export default PrivacyPolicy;
