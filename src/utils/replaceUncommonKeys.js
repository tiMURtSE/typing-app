const replaceUncommonKeys = (text) => {
    const replacement = {
        'ё': 'е',
        '—': '-',
        '–': '-',
        '«': '"',
        '»': '"',
    };

    const splittedText = text.trim().split('');

    for (let i = 0; i < splittedText.length; i++) {
        const charactersForReplace = Object.keys(replacement);
        
        if (charactersForReplace.includes(splittedText[i])) {
            splittedText[i] = replacement[splittedText[i]];
        }
    }

    return splittedText;
};

export default replaceUncommonKeys;