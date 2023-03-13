import React, { useEffect, useState } from 'react';

import HighScoreItem from '../components/HighscoreItem';
import StyledTextBox from '../components/styles/TextBox.styled';
import StyledTableHead from '../components/styles/TableHead.styled';
import sortHighscores from '../utils/sortHighscores';
import removeRecordFilter from '../utils/removeRecordFilter';

const Highscores = () => {
    const highscoresFromStorage = JSON.parse(localStorage.getItem('highscores')) || [];
    const highscoresSortedByDefault = highscoresFromStorage.sort((a, b) => b.speed - a.speed);
    const [highscores, setHighscores] = useState(highscoresSortedByDefault);

    const defineSortingState = (event) => {
        let element = event.target;

        if (element.nodeName !== 'TH') {
            element = element.parentElement;
        }

        removeRecordFilter(element);

        const className = element.classList;
        const targetOfSort = element.textContent;

        if (className.contains('descending-order')) {
            const filteredHighscores = sortHighscores(highscores, targetOfSort, false);

            setHighscores(filteredHighscores);
            element.classList.remove('descending-order');
            element.classList.add('ascending-order');
        } else if (className.contains('ascending-order')) {
            setHighscores(highscoresSortedByDefault);
            element.classList.remove('ascending-order');
        } else {
            const filteredHighscores = sortHighscores(highscores, targetOfSort, true);

            setHighscores(filteredHighscores);
            element.classList.add('descending-order');
        }
    };

    useEffect(() => {
        localStorage.removeItem('current-text');
    }, []);

    return (
        <StyledTextBox>
            <table className='table'>
                <thead>
                    <StyledTableHead>
                        <th>№</th>
                        <th className='table__header-title' onClick={defineSortingState}><span>Дата</span></th>
                        <th className='table__header-title descending-order' onClick={defineSortingState}><span>Скорость</span></th>
                        <th className='table__header-title' onClick={defineSortingState}><span>Точность</span></th>
                    </StyledTableHead>
                </thead>

                <tbody>
                    {highscores.map((score, index) =>
                        <HighScoreItem score={score} number={index + 1} key={score.date}/>
                    )}
                </tbody>
            </table>

            {(!highscores.length) ? (
                <div style={{textAlign: 'center', margin: '50px 0', fontSize: 30}}>
                    <span>Рекордов пока нет! =(</span>
                </div> 
            ) : (
                null
            )}
        </StyledTextBox>
    );
};

export default Highscores;