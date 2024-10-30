import { Avatar, Box, Paper, Stack, styled, Typography } from "@mui/material";

interface LogProps {
    turns: any[];
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Log: React.FC<LogProps> = ({ turns }) => {
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            {turns.map(turn => (
                <Item sx={{ my: 1, mx: 'auto', p: 2 }} key={`${turn.square.row}${turn.square.col}`}>
                    <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                        <Avatar>{turn.player}</Avatar>
                        <Typography noWrap>Selected {turn.square.row}-{turn.square.col}</Typography>
                    </Stack>
                </Item>
            ))}
        </Box>
    )
}

export default Log;