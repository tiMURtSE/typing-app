 const randomText = 'После того как мы составили словарик, добавляем его прямо в readme проекта. Он должен быть актуальным и лежать на виду, рядом с кодом. Следующий шаг — это контроль, за это отвечает код-ревью. В процессе код-ревью по неймингу учитываем следующее:';

 const replaceMissingKeys = (text) => {
    const replacement = {
        'ё': 'е',
        '—': '-',
        '–': '-',
        '«': '"',
        '»': '"',
    };

    const splittedText = text.split('');

    for (let i = 0; i < splittedText.length; i++) {
        const charactersForReplace = Object.keys(replacement);
        
        if (charactersForReplace.includes(splittedText[i])) {
            splittedText[i] = replacement[splittedText[i]];
        }
    }

    return splittedText;
};

export const text = replaceMissingKeys(randomText);

