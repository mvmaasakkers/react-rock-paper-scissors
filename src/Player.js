import React from 'react';
import Option from "./Option";

const Player = (props) => {
    return (
        <div className={"player"}>
            <h3>Player {props.player.name} ({props.player.won} wins)</h3>
            {props.player.selectedOption === '' ? (
                <>
                    <button onClick={() => props.setPlayerOption(props.playerId, "rock")} className={"playerOption"}>
                        <Option option={"rock"}/></button>
                    <button onClick={() => props.setPlayerOption(props.playerId, "paper")} className={"playerOption"}>
                        <Option option={"paper"}/></button>
                    <button onClick={() => props.setPlayerOption(props.playerId, "scissors")}
                            className={"playerOption"}><Option option={"scissors"}/></button>
                </>
            ) : (
                <Option
                    option={props.player.selectedOption}
                    color={props.gameState !== 'active' ?
                        (
                            props.player.winner ? 'green' : 'red'
                        ) : (
                            ''
                        )}
                />
            )}

        </div>
    )
};

export default Player;
