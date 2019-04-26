import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPaper, faHandRock, faHandScissors} from '@fortawesome/free-solid-svg-icons'

const Option = (props) => {
    const options = {
        "rock": faHandRock,
        "paper": faHandPaper,
        "scissors": faHandScissors,
    };

    return (
        <FontAwesomeIcon icon={options[props.option]} size="6x" color={props.color}/>
    );
};

export default Option;
