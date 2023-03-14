const calculateResult = (result, textLength) => {
    const timeInMinutes = ((Date.now() - result.timeStartedAt) / 1000 / 60).toFixed(2);
    const testingCompletionDate = new Date().toLocaleString();
    const rateOfCorrectPress = Number(100 - (result.mistakeCounter / textLength * 100)).toFixed(2);
    const charactersPerMinute = Math.round(textLength / timeInMinutes);

    return {
        date: testingCompletionDate,
        accuracy: rateOfCorrectPress,
        speed: charactersPerMinute,
    };
};

export default calculateResult;