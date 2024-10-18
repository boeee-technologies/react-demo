import { BackHand } from "@mui/icons-material";
import { Players } from "./Players";
import { Box, styled } from "@mui/material";

const BoxMain = styled(Box)(({ theme }) => ({
    "& .MuiBox-root": {
        border: '1px solid grey',
        margin: '15px'
    }
}));

const Box50 = styled(Box)(({ theme }) => ({
    "& .MuiBox-root": {
        border: '1px solid grey',
        margin: '15px'
    }
}));


export default function Tik() {
    return (
        <BoxMain>
            <Box>
                <Players name='Player 1' symbol='X'></Players>
                <Players name='Player 2' symbol='O'></Players>
            </Box>
        </BoxMain>
    );
}

