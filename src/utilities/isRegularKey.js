export const isRegularKey = (key) => {
    const allowedKeys = [
        'Minus',
        'Equal',
        'Backquote',
        'BracketLeft',
        'BracketRight',
        'Semicolon',
        'Quote',
        'Comma',
        'Period',
        'Slash',
        'Backslash',
        'Space'
    ];

    return (
        key.includes('Key') ||
        key.includes('Digit') ||
        allowedKeys.includes(key)
    );
};