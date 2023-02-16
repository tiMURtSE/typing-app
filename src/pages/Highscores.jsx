import React from 'react';
import HighScoreItem from '../components/HighscoreItem';
import StyledTextBox from '../components/styles/TextBox.styled';

const Highscores = () => {
    const highscores = JSON.parse(localStorage.getItem('highscores'));

    return (
        <StyledTextBox>
            <table className='table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Дата</th>
                        <th>Скорость<br/>(сим./м.)</th>
                        <th>Точность</th>
                    </tr>
                </thead>

                <tbody>
                    {highscores.map((score, index) =>
                        <HighScoreItem score={score} number={index + 1} key={score.date}/>
                    )}
                </tbody>
            </table>
        </StyledTextBox>
    );
};

export default Highscores;