import React from 'react';

import StyledHighscoreItem from './styles/HighscoreItem.styled';

const HighScoreItem = ({ score, number}) => {
    const [date, time] = score.date.split(', ');
    const [hours, minutes] = time.split(':');
    const accuracy = Number(score.accuracy);

    return (
        <StyledHighscoreItem>
            <td>{number}</td>
            <td>
                <div>{date}</div>
                <div>{[hours, minutes].join(':')}</div>
            </td>
            <td>{score.speed}</td>
            <td>{`${accuracy}%`}</td>
        </StyledHighscoreItem>
    );
};

export default HighScoreItem;