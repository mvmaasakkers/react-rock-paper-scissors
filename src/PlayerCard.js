import React from 'react';
import Option from "./Option";

const PlayerCard = (props) => {
    return (
        <div className={"playerCard"}>
            <h3>Player {props.name}</h3>
            {props.option === '' ? (
                <>
                    <button onClick={() => props.setOption("rock")}><Option option={"rock"}/></button>
                    <button onClick={() => props.setOption("paper")}><Option option={"paper"}/></button>
                    <button onClick={() => props.setOption("scissors")}><Option option={"scissors"}/></button>
                </>
            ) : (
                <Option
                    option={props.option}
                    color={props.gameState !== 'active' ?
                        (
                            props.winner ? 'green' : 'red'
                        ) : (
                            ''
                        )}
                />
            )}

        </div>
    )
};

export default PlayerCard;
