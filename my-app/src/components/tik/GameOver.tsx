
interface GameOverProps {
    winner: string | null;
}

export default function GameOver(winner: GameOverProps) {
    return (
        <div>
            <h1> Game Over!</h1>
            {winner.winner && <p>{winner.winner}, You Won!</p>}
            {!winner.winner && <p>Game is Draw</p>}

            <button>Play Again</button>
        </div>
    );
}