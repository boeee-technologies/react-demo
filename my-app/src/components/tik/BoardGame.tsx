import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
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
    border: '1px solid green',
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
    <div>
      {board.map((row, rowIndex) => (
        <Box key={rowIndex}>
          {row.map((col, colIndex) => (
            <CtrButton variant="contained" color="success" size='large'
              onClick={() => onSelectSquare(rowIndex, colIndex)}
              key={`${rowIndex}-${colIndex}`}
              disabled={col != null}>{col}</CtrButton>
          ))}
        </Box>
      ))
      }
      <Box>
        <ResetButton variant="contained" onClick={handleReset}>Reset</ResetButton>
      </Box>
    </div>
  );
};
export default BoardGame;
