import { Players } from "./Players";
import { styled } from "@mui/material";
import { useState } from "react";
import Log from "./Log";
import { WINNING_COMBINATIONS } from './Winning-combinations'
import BoardGame from "./BoardGame";
import GameOver from "./GameOver";
const PlayerComp = styled(Players)(({ theme }) => ({
    ".MuiBox-root": {
        border: '1px solid grey',
        margin: '15px'
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

function deriveActivePlayer(Turns: Turn[]) {
    let currentPlayer = 'X';
    if (Turns.length > 0 && Turns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

const InitialBoard: Board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Tik() {
    const [gameTurns, setGameTurns] = useState<Turn[]>([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = InitialBoard;
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const SecondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
        if (
            firstSquareSymbol && firstSquareSymbol === SecondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = firstSquareSymbol;
        }
    }

    const isDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        const currentActivePlayer = deriveActivePlayer(gameTurns);
        setGameTurns((prevTurns) => {
            let currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurns,
            ];
            return updatedTurns;
        });
    }
    return (
        <>
            <PlayerComp name='Player 1' symbol='X' isActive={activePlayer === 'X'}></PlayerComp>
            <PlayerComp name='Player 2' symbol='O' isActive={activePlayer === 'O'}></PlayerComp>

            {(winner || isDraw) && <GameOver winner={winner !== undefined ? winner : null} />}
            <BoardGame
                onSelectSquare={handleSelectSquare}
                board={gameBoard} />
            <Log turns={gameTurns} />
        </>
    );
}


