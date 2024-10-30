import { Players } from "./Players";
import { styled, Typography } from "@mui/material";
import { useState } from "react";
import Log from "./Log";
import { WINNING_COMBINATIONS } from './Winning-combinations'
import BoardGame from "./BoardGame";
import GameOver from "./GameOver";

const PlayerComp = styled(Players)(({ theme }) => ({
    ".MuiBox-root": {
        border: '1px solid grey',
        margin: '15px',
        display: 'flex'
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
const InitialBoardGame: Board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

interface PlayersListProps {
    PlayerName: string,
    Symbol: string
}

function deriveActivePlayer(Turns: Turn[]) {
    let currentPlayer = 'X';
    if (Turns.length > 0 && Turns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}


export default function Tik() {
    const [gameTurns, setGameTurns] = useState<Turn[]>([]);
    const activePlayer = deriveActivePlayer(gameTurns);
    const [showDialog, setShowDialog] = useState(false);
    const [PlayersList, setPlayers] = useState<PlayersListProps[]>([
        { Symbol: 'X', PlayerName: 'Player 1' },
        { Symbol: 'O', PlayerName: 'Player 2' }
    ]);

    let gameBoard = [...InitialBoardGame.map(array => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    const playerName = (symbol: string | undefined) => {
        return PlayersList.find(player => player.Symbol === symbol)?.PlayerName;
    }

    let winnerSymbol;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const SecondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
        if (
            firstSquareSymbol && firstSquareSymbol === SecondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winnerSymbol = firstSquareSymbol;
        }
    }

    const isDraw = gameTurns.length === 9 && !winnerSymbol;

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
    function handleOnRestart() {
        setGameTurns([]);
        setShowDialog(false);
    }
    function handlePlayerNameChange(newName: string, symbol: string) {
        setPlayers(prevPlayers =>
            prevPlayers.map(player =>
                player.Symbol === symbol
                    ? { ...player, PlayerName: newName }
                    : player
            )
        );
    }

    return (
        <>
            <Typography component="div"    >
                <PlayerComp name={PlayersList[0].PlayerName} onPlayerNameChange={handlePlayerNameChange} symbol={PlayersList[0].Symbol} isActive={activePlayer === PlayersList[0].Symbol} />
                <PlayerComp name={PlayersList[1].PlayerName} onPlayerNameChange={handlePlayerNameChange} symbol={PlayersList[1].Symbol} isActive={activePlayer === PlayersList[1].Symbol} />
            </Typography>
            {(winnerSymbol || isDraw) &&
                <GameOver
                    show={true}
                    playerName={playerName(winnerSymbol)}
                    symbol={winnerSymbol}
                    onRestart={handleOnRestart} />}
            <BoardGame
                onSelectSquare={handleSelectSquare}
                board={gameBoard} />
            <Log turns={gameTurns} />
        </>
    );
}


