import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap');
    
    :root {
        --main-color: #ecd3ad;
        --dark: #003945;
        --cream: #a17b72;
        --green: #aac1ad;
        --red: #cd444e;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input,
    button,
    textarea {
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        color: inherit;
        background-color: inherit;
        border: 1px solid black;
    }

    html,
    body {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 24px;
        background-color: #ecd3ad;
        color: var(--dark);
        height: 100%;
        padding: 0 20px;
    }

    .testing:focus {
        outline: 3px solid blue;
    }
`