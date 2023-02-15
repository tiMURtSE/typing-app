import React from 'react';

const TestingStats = ({ result }) => {
    return (
        <div className='stats'>
            <span>Скорость: {result.speed} сим./мин.</span>
            <span>Точность: {result.accuracy}%</span>
        </div>
    );
};

export default TestingStats;