import { Modal, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

interface GameOverProps {
    playerName: string | null | undefined;
    symbol: string | null | undefined;
    show: boolean;
    onRestart: () => void;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
};


export default function GameOver({ playerName, symbol, show, onRestart }: GameOverProps) {

    const [open, setOpen] = useState(show);
    function handleClose() {
        setOpen(false);
        onRestart();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Game Over!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} aria-live="polite">
                    {playerName ? (
                        <p>Yay!, {playerName} ({symbol}) Won!!!</p>
                    ) : (
                        <p>Game is Draw!</p>
                    )}
                </Typography>
                <Button variant="contained" color="success" onClick={handleClose}>Play Again</Button>
            </Box>
        </Modal>
    );


}