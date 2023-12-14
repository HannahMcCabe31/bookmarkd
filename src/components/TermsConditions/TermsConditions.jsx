import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function TermsConditions() {
  return (
    <>
      <ThemeProvider theme={bookmarkd}>
        <div className="md:max-w-[85%] md:pl-[20%]">
          <Box className="mx-8">
            <Link to="/settings">
              <img
                src={backArrow}
                alt="backArrow"
                className="w-8 h-8 mt-5 md:my-[5vh] md:w-[5vh] md:h-[5vh]"
              />
            </Link>
            <Box className="md:hidden">
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
              <Box className="mb-10">
                <Typography
                  variant="h4"
                  className="flex flex-row justify-center text-white"
                >
                  by readers, for readers
                </Typography>
              </Box>
            </Box>
            <Box className="mx-8 ">
              <Typography
                variant="h4"
                className="text-white mb-5 font-semibold md:text-[2.5rem]"
              >
                Terms & Conditions
              </Typography>
              <Typography variant="subtitle" className="text-white">
                <Typography variant="subtitle" display="block">
                  Effective Date: November 30, 2023
                </Typography>
                <div>
                  <Typography
                    className="font-semibold md:py-[1rem]"
                    variant="subtitle"
                    display="block"
                  >
                    1. Acceptance of Terms
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    By accessing or using the Bookmarkd website, mobile
                    application, or any other products or services provided by
                    Bookmarkd (collectively, the "Services"), you agree to be
                    bound by these Terms and Conditions (the "Terms"). If you do
                    not agree to these Terms, you may not access or use the
                    Services.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    2. Account Registration{" "}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    In order to access certain features of the Services, you may
                    be required to create an account. You agree to provide
                    accurate and complete information when creating your
                    account. You are responsible for maintaining the
                    confidentiality of your account password and for all
                    activities that occur under your account. You agree to
                    notify Bookmarkd immediately of any unauthorized use of your
                    account.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    3. User Conduct{" "}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    You agree to use the Services in a manner that is lawful,
                    non-discriminatory, and respectful of others. You agree not
                    to use the Services to: Post or transmit any material that
                    is illegal, harmful, threatening, abusive, harassing,
                    tortious, defamatory, vulgar, obscene, libelous, invasive of
                    another's privacy, hateful, or racially, ethnically, or
                    otherwise objectionable. Post or transmit any material that
                    contains software viruses, Trojan horses, worms, or other
                    harmful components. Interfere with or disrupt the Services
                    or servers or networks connected to the Services. Use any
                    device, software, or routine that interferes with the proper
                    working of the Services. Attempt to gain unauthorized access
                    to the Services or any part thereof.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    4. Intellectual Property{" "}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    The Services and all content contained therein, including
                    but not limited to text, graphics, images, software, and
                    audio, are the property of Bookmarkd or its licensors and
                    are protected by copyright, trademark, and other
                    intellectual property laws. You may not copy, reproduce,
                    modify, distribute, display, perform, or create derivative
                    works from any of the content without the prior written
                    consent of Bookmarkd.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    5. Third-Party Links
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    The Services may contain links to third-party websites or
                    services that are not owned or controlled by Bookmarkd.
                    Bookmarkd has no control over, and assumes no responsibility
                    for, the content, privacy policies, or practices of any
                    third-party websites or services. You further acknowledge
                    and agree that Bookmarkd shall not be responsible or liable,
                    directly or indirectly, for any damage or loss caused or
                    alleged to be caused by or in connection with use of or
                    reliance on any such content, goods or services available on
                    or through any such websites or services.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    6. Disclaimer of Warranties{" "}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                    BASIS. BOOKMARKD DISCLAIMS ALL WARRANTIES, EXPRESS OR
                    IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, AND NON-INFRINGEMENT. BOOKMARKD DOES NOT WARRANT
                    THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    7. Limitation of Liability
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    IN NO EVENT SHALL BOOKMARKD BE LIABLE FOR ANY DIRECT,
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY
                    DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF
                    PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES
                    ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY
                    TO USE THE SERVICES, EVEN IF BOOKMARKD HAS BEEN ADVISED OF
                    THE POSSIBILITY OF SUCH DAMAGES.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    8. Indemnification
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    You agree to indemnify, defend, and hold harmless Bookmarkd,
                    its officers, directors, employees, and agents, from and
                    against all claims, liabilities, damages, losses, costs,
                    expenses, and fees (including reasonable attorneys' fees)
                    arising out of or in connection with your use of the
                    Services, your violation of these Terms, or your violation
                    of any applicable laws or regulations.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    9. Governing Law
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    These Terms shall be governed by and construed in accordance
                    with the laws of the State of California, without regard to
                    its conflict of laws principles.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    10. Entire Agreement
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    These Terms constitute the entire agreement between you and
                    Bookmarkd and supersede all prior or contemporaneous
                    communications, agreements, or representations, whether oral
                    or written.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    11. Severability
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    If any provision of these Terms is held to be invalid or
                    unenforceable, such provision shall be struck from these
                    Terms and the remaining provisions shall remain in full
                    force and effect.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    12. Waiver
                  </Typography>{" "}
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    No waiver of any provision of these Terms shall be effective
                    unless in writing and signed by both parties.
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="font-semibold md:py-[1rem]"
                  >
                    13. Amendments{" "}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    display="block"
                    className="md:text-xl"
                  >
                    {" "}
                    Bookmarkd may modify these Terms from time to time. We will
                    notify you of any material changes by posting the updated
                    Terms on our website and by sending you an email. You are
                    responsible for reviewing the updated Terms and agreeing to
                    them before
                  </Typography>
                </div>
              </Typography>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}

export default TermsConditions;
