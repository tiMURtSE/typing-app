import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/button/Button';
import classes from './Statistics.module.css';

const Statstics = ({text, mistakes, timer}) => {
    const route = useNavigate();
    const accuracy = +((text.length - mistakes.number) / text.length * 100).toFixed(2);
    const time = +((timer.endTime - timer.startTime) / 1000 / 60).toFixed(3);
    const symbolsPerMinute = Math.round(text.length / time);

    return (
        <div className={classes.statistics}>
            <div>Символов в минуту: <b>{symbolsPerMinute}</b> сим./м.</div>
            <div>Процент точности: <b>{accuracy}</b> %</div>
            <Button onClick={() => route('/')}>OK!</Button>
        </div>
    );
};

export default Statstics;