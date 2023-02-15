 const randomText = 'После';

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

