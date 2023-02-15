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
                        <td>№</td>
                        <td>Дата</td>
                        <td>Скорость<br/>(сим./м.)</td>
                        <td>Точность</td>
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