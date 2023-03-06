const replaceUncommonKeys = (text) => {
    const splittedText = text.trim().split('');
    const replacement = {
        'ё': 'е',
        '—': '-',
        '–': '-',
        '«': '"',
        '»': '"',
        '“': '"',
        '”': '"',
        '’': '\'',
    };

    for (let i = 0; i < splittedText.length; i++) {
        const charactersForReplace = Object.keys(replacement);
        
        if (charactersForReplace.includes(splittedText[i])) {
            splittedText[i] = replacement[splittedText[i]];
        }
    }

    return splittedText;
};

export default replaceUncommonKeys;