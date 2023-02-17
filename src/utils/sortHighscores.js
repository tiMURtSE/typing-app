const sortHighscores = (highscores, targetOfSort, isDescending) => {
    const newHighscores = [...highscores];

    switch (targetOfSort) {
        case 'Дата':
            newHighscores.sort((a, b) => sortDate(a, b, isDescending));
            break;
        case 'Скорость':
            newHighscores.sort((a, b) => sortSpeed(a, b, isDescending));
            break;
        case 'Точность':
            newHighscores.sort((a, b) => sortAccuracy(a, b, isDescending));
            break;
        default:
            break;  
    }

    return newHighscores;
};

const sortDate = (a, b, isDescending) => {
    const changeToTimestamp = (score) => {
        let [date, time] = score.split(', ');

        date = date.split('.').reverse().join('-');

        return Date.parse([date, time].join('T'));
    };

    [a, b] = [a.date, b.date].map(changeToTimestamp);

    return isDescending ? (b - a) : (a - b);
};

const sortSpeed = (a, b, isDescending) => {
    return isDescending ? (b.speed - a.speed) : (a.speed - b.speed);
};

const sortAccuracy = (a, b, isDescending) => {
    return isDescending ? (b.accuracy - a.accuracy) : (a.accuracy - b.accuracy);
};

export default sortHighscores;