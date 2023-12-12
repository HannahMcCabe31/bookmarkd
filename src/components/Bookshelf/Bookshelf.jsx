import Typography from "@mui/material/Typography";

function Bookshelf(props) {
    // Stuff

    return (
        <>
        <Typography variant="h4">
            {props.bookshelf_name}
        </Typography>
        </>
    )
}

export default Bookshelf