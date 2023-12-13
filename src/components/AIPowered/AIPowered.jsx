import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function AIPowered() {
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
        <Box className="mx-8">
        <Typography variant="h4" className="text-white my-8 font-semibold">
          bookmarkd: AI Powered
        </Typography>
        <Typography className="text-white" variant="subtitle">
          <Typography variant="subtitle" display="block" className="font-semibold">
            Harnessing the Power of OpenAI API for Personalized Book
            Recommendations
          </Typography>

          <Typography variant="subtitle" display="block">
            In today's vast sea of literature, finding the perfect book to match
            your interests and preferences can be a daunting task. That's where
            Bookmarkd comes in. Powered by the cutting-edge OpenAI API,
            Bookmarkd is your personalized book recommendation engine that helps
            you discover and enjoy amazing books that you'll love.
          </Typography>

          <Typography variant="subtitle" display="block" className="font-semibold">
            OpenAI: The Power Behind Bookmarkd's Recommendations
          </Typography>

          <Typography variant="subtitle" display="block">
            OpenAI is a leading research and development company dedicated to
            developing safe and beneficial artificial general intelligence.
            Their API provides access to powerful language models like GPT-3,
            capable of generating human-quality text, translating languages, and
            writing different kinds of creative content.
          </Typography>

          <Typography variant="subtitle" display="block" className="font-semibold">
            Bookmarkd's Recommendation Process
          </Typography>

          <Typography variant="subtitle" display="block">
            Bookmarkd harnesses the power of OpenAI's language models to analyze
            your reading history, preferences, and interests. By understanding
            your unique reading profile, Bookmarkd can generate personalized
            recommendations tailored to your taste.
          </Typography>

          <Typography variant="subtitle" display="block" className="font-semibold">
            Benefits of Bookmarkd's AI-Powered Recommendations
          </Typography>

          <Typography variant="subtitle" display="block">
            Discover hidden gems: Go beyond the obvious and uncover books you
            might never have found on your own.
          </Typography>

          <Typography variant="subtitle" display="block">
            Expand your literary horizons: Explore new genres, authors, and
            styles to broaden your reading experience.
          </Typography>

          <Typography variant="subtitle" display="block">
            Save time and effort: No more endless browsing or relying on
            unreliable recommendations. Bookmarkd does the work for you.
          </Typography>

          <Typography variant="subtitle" display="block" className="font-semibold">
            Experience the Bookmarkd Difference
          </Typography>

          <Typography variant="subtitle" display="block">
            Sign up for Bookmarkd today and let the power of AI guide you to
            your next great read. With Bookmarkd, you can:
          </Typography>

          <Typography variant="subtitle" display="block">
            Create a personalized bookshelf: Keep track of your books, both read
            and to-read.
          </Typography>

          <Typography variant="subtitle" display="block">
            Rate and review books: Share your thoughts and help others discover
            great books.
          </Typography>

          <Typography variant="subtitle" display="block">
            Get instant recommendations: Receive personalized suggestions
            anytime, anywhere.
          </Typography>

          <Typography variant="subtitle" display="block" className="font-semibold">
            Embrace AI-Powered Book Recommendations
          </Typography>

          <Typography variant="subtitle" display="block">
            Bookmarkd is the perfect companion for book lovers of all levels,
            from avid readers to casual browsers. With its AI-powered
            recommendations, Bookmarkd makes finding your next literary
            adventure easier and more enjoyable than ever before.
          </Typography>

          <Typography variant="subtitle" display="block" className="font-semibold">
            Bookmarkd: Your Journey to Literary Bliss
          </Typography>
        </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default AIPowered;
