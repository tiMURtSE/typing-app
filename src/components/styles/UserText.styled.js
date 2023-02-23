import styled from "styled-components";
import { activeButton, border } from "./GlobalStyles";

const StyledUserText = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 135px;

    border: ${border}
    font-size: var(--small-font-size);

    & .user-text__text {
        flex-basis: 75%;
        padding: 5px 0 5px 5px;

        overflow-x: scroll;
        cursor: pointer;
    }

    & .user-text__buttons {
        display: flex;
        flex-basis: 25%;

        & button {
            flex: 1 1 0;
    
            border: 0;
            border-top: ${border}
            cursor: pointer;
    
            &:hover {
                background-color: var(--light-grey);
            }
    
            &:active {
                ${activeButton}
            }
        }
    }
` ;

export default StyledUserText;