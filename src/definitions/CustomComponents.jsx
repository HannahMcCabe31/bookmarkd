import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const SearchBar = styled(TextField)({
    "& label.MuiInputLabel-root": {
        fontFamily: "League Spartan",
        color: "#FFFFFF",
        fontSize: "3vw"
    },
    "& label.Mui-root": {
        color: "#FFFFFF",
    },
    "& label.Mui-focused": {
        color: "#FFFFFF",
    },
    "& .MuiOutlinedInput-root": {
        fontFamily: "League Spartan",
        color:"#FFFFFF",
        "& fieldset": {
            borderColor: "#FFFFFF",
        },
    },
    "& .MuiTextField-root": {
        color: "#FFFFFF",
}});