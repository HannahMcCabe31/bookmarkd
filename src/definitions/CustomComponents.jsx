import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const SearchBar = styled(TextField)({
    "& label.MuiInputLabel-root": {
        fontFamily: "League Spartan",
        color: "#68B9FF",
    },
    "& label.Mui-root": {
        color: "#68B9FF",
    },
    "& label.Mui-focused": {
        color: "#68B9FF",
    },
    "& .MuiOutlinedInput-root": {
        fontFamily: "League Spartan",
        color:"#c2e3ff",
        "& fieldset": {
            borderColor: "#68B9FF",
        },
    },
});