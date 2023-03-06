// потом обновить, чтобы добавлять только если входит в топ

const setResultInStorage = (result) => {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    highscores.push(result);
    localStorage.setItem('highscores', JSON.stringify(highscores));
};

export default setResultInStorage;
