import React from 'react';

import StyledHighscoreItem from './styles/HighscoreItem.styled';

const HighScoreItem = ({ score, number}) => {
    return (
        <StyledHighscoreItem>
            <td>{number}</td>
            <td>{score.date}</td>
            <td>{score.speed}</td>
            <td>{score.accuracy}</td>
        </StyledHighscoreItem>
    );
};

export default HighScoreItem;