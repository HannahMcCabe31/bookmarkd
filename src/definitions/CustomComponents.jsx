import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";

export const SearchBar = styled(TextField)({
    "& label.MuiInputLabel-root": {
        fontFamily: "League Spartan",
        color: "#FFFFFF",
        fontSize: "4vw"
    },
    "& label.Mui-root": {
        color: "#FFFFFF",
    },
    "& label.Mui-focused": {
        fontSize: "3vw",
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

export const BookButton = styled(Button)({
    padding: 0,
    border: 0,
    margin: 0,
    minWidth: 0,
    color:"#FFFFFF",
    width: 32,
    height: 32,
})

/*bg-element-blue text-white w-8 h-8*/