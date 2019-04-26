import React, {useEffect, useState} from 'react';
import PlayerCard from "./PlayerCard";

const Game = (props) => {
    const [player1Option, setPlayer1Option] = useState('');
    const [player2Option, setPlayer2Option] = useState('');
    const [player1Winner, setPlayer1Winner] = useState(false);
    const [player2Winner, setPlayer2Winner] = useState(false);
    const [gameState, setGameState] = useState('active');

    const options = {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
    };

    useEffect(() => {
        if (player1Option !== '' && player2Option !== '') {
            if (player1Option === player2Option) {
                setGameState('draw');
            } else {
                setGameState('complete');
            }

            if (options[player1Option].includes(player2Option)) {
                setPlayer1Winner(true);
            } else if (options[player2Option].includes(player1Option)) {
                setPlayer2Winner(true);
            }
        }
    });

    return (
        <div className={"game"}>
            <h1>Game state: {gameState}</h1>
            <PlayerCard
                name={"1"}
                winner={player1Winner}
                gameState={gameState}
                option={player1Option}
                setOption={setPlayer1Option}
            />
            <PlayerCard
                name={"2"}
                winner={player2Winner}
                gameState={gameState}
                option={player2Option}
                setOption={setPlayer2Option}
            />
        </div>
    );
};

export default Game;
