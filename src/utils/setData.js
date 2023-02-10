// потом обновить, чтобы добавлять только если входит в топ

export const setResultInLocalStorage = (result) => {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    highscores.push(result);
    console.log(highscores)
    localStorage.setItem('highscores', JSON.stringify(highscores));
};
