import { Box } from "@mui/material";

interface PlayerProps {
    name: string;
    symbol: string;
}

export function Players({ name, symbol }: PlayerProps) {
    return (
        <Box>
            <span>
                <span>{name}</span>
                <span>{symbol}</span>
            </span>
            <button>Edit</button>
        </Box>
    );
}