import { Modal, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useState } from "react";

interface GameOverProps {
    playerName: string | null | undefined;
    symbol: string | null | undefined;
    show: boolean;
    onRestart: () => void;
}

export default function GameOver({ playerName, symbol, show, onRestart }: GameOverProps) {
    const [open, setOpen] = useState(show);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: red[100],
            }}
        >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Game Over!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {playerName && playerName && <p>Yay!, {playerName} ({symbol}) Won!!!</p>}
                    {!playerName && <p>Game is Draw!</p>}
                </Typography>
                <button onClick={onRestart}>Restart</button>
            </Box>
        </Modal>
    );
}