import styled from "styled-components";
import { modalBackground } from "./GlobalStyles";

const StyledModalWidnow = styled.div`
    ${modalBackground}
    
    & .inner-window {
        position: relative;
        min-width: 500px;
        min-height: 300px;
        padding: 40px 100px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;

        background-color: var(--main-color);
        border: 4px solid var(--dark);
    }

    & .inner-window__label {
        font-size: 35px;
    }

    & .stats {
        display: flex;
        flex-direction: column;

        font-size: 28px;
    }
`

export default StyledModalWidnow;