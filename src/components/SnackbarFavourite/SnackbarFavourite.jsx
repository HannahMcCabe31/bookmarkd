import React, { useState } from 'react';
import { Box, Button, Snackbar } from '@mui/material';


function SnackbarFavourite() {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(true);
    };
    
    function handleClose(event) {
        console.log(event)
        setOpen(false);
    }
    
    return (
        <Box>
        <Button variant="outlined" onClick={handleClick({vertical: "top", horizontal: "center"})}>
            Open success snackbar
        </Button>
        <Snackbar
            // anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            onClose={handleClose}
            message="Added to favourites"
            // key={vertical + horizontal}
        />
        </Box>
    );
    }

    export default SnackbarFavourite;