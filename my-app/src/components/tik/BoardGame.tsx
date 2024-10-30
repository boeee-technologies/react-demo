import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box, styled } from "@mui/material";
import { purple, yellow } from '@mui/material/colors';

const ResetButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const CtrButton = styled(Button)(({ theme }) => ({
  ".MuiButton-root": {
    border: '1px solid red',
    height: '75', width: '75',
    bgcolor: yellow,
  }
}));

interface Turn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

type Board = (string | null)[][];

interface BoardGameProps {
  onSelectSquare: (row: number, col: number) => void; // Type for the onSelectSquare function
  board: Board;
}

const BoardGame: React.FC<BoardGameProps> = ({ onSelectSquare, board: board }) => {
  const handleReset = () => {
    //const item = boards.map(row => [...row]); // Deep copy of the board
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: '16px' }}
    >
      {/* Tic-Tac-Toe Board */}
      <Grid container spacing={2} justifyContent="center">
        {board.map((row, rowIndex) => (
          <Grid container item spacing={1} key={rowIndex} justifyContent="center">
            {row.map((col, colIndex) => (
              <Grid item key={`${rowIndex}-${colIndex}`}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={col != null}
                  sx={{
                    width: '100px',
                    height: '100px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                  }}
                >
                  {col}
                </Button>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default BoardGame;
