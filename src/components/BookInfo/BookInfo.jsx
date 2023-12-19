import BookSlider from "../BookSlider/BookSlider";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

function BookInfo({
    bookPageData,
    leftElementClass,
    rightElementClass,
    rightLowerElementClass,
}) {
    const filledStars = Math.ceil(bookPageData.overall_rating);
    const emptyStars = 5 - filledStars;

    function renderStars() {
        let stars = [];
        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(
                <span key={`filled_${i}`} className="text-star-blue tracking-[0.3em]">
                    ★
                </span>
            );
        }
        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty_${i}`} className="text-star-blue tracking-[0.3em]">
                    ☆
                </span>
            );
        }

        return stars;
    }

    function randomReviews() {
        return Math.floor(Math.random() * 1000);
    }

    return (
        <>
            <Box className={`${rightElementClass}`}>
                <Typography
                    variant="h2"
                    className={`m-auto p-auto mt-3 md:text-center md:text-5xl md:font-normal`}
                >
                    {bookPageData.title ? (
                        bookPageData.title
                    ) : (
                        <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="45vw"
                            height="6vw"
                            className="mb-2"
                        />
                    )}
                </Typography>
                <Box className=" md:mt-[3vw]">
                    <Typography
                        variant="p"
                        className={`m-auto p-auto mt-0 md:text-3xl md:text-center`}
                    >
                        {bookPageData.author ? (
                            bookPageData.author
                        ) : (
                            <Skeleton
                                sx={{ bgcolor: "grey.900" }}
                                variant="rectangular"
                                width="20vw"
                                height="4vw"
                            />
                        )}
                    </Typography>
                </Box>
            </Box>
            <Box className={`${leftElementClass}`}>
                <Typography
                    variant="h3"
                    className="mx-auto my-0 p-auto pt-[3vw] pb-0 mb-0 md:text-5xl md:mt-[1vw] md:pt-0"
                >
                    {bookPageData.overall_rating ? (
                        renderStars()
                    ) : (
                        <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="30vw"
                            height="5vw"
                            className="mb-2"
                        />
                    )}
                </Typography>
                <Typography
                    variant="subtitle"
                    className="m-auto p-auto md:text-xl"
                >
                    {bookPageData.overall_rating ? (
                        `${randomReviews()} ratings`
                    ) : (
                        <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="10vw"
                            height="3vw"
                            className="mb-2"
                        />
                    )}
                </Typography>
            </Box>
            <Box className={`${rightLowerElementClass} md:relative`}>
                <Box className={`md:absolute md:top-[50%] md:max-w-[100%] md:px-[2vw]`}>
                    <BookSlider bookPageData={bookPageData} />
                    <Box className="flex md:max-w-[100%] md:max-h-[20vw] text-ellipsis overflow-hidden m-auto px-[3vw] rounded-2xl bg-element-blue mt-[4vw] w-[80vw] h-[30vw] text-center items-center shadow-element-shadow">
                        <Typography
                            variant="p"
                            className="m-auto p-auto line-clamp-4 md:text-xl"
                        >
                            {bookPageData.short_description ? (
                                bookPageData.short_description
                            ) : (
                                <>
                                    <Skeleton
                                        sx={{ bgcolor: "grey.900" }}
                                        variant="rectangular"
                                        width="65vw"
                                        height="4vw"
                                    />
                                    <Skeleton
                                        sx={{ bgcolor: "grey.900" }}
                                        variant="rectangular"
                                        width="65vw"
                                        height="4vw"
                                        className="mt-2"
                                    />
                                    <Skeleton
                                        sx={{ bgcolor: "grey.900" }}
                                        variant="rectangular"
                                        width="65vw"
                                        height="4vw"
                                        className="mt-2"
                                    />
                                </>
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default BookInfo;
