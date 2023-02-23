import styled from "styled-components";
import { border, modalBackground } from "./GlobalStyles";

const StyledUserTextEditing = styled.div`
    ${modalBackground}

    & .user-text-editing__content {
        position: relative;
        min-width: 500px;
        min-height: 300px;
        padding: 50px 100px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;

        background-color: var(--main-color);
        border: 4px solid var(--dark);
    }

    & .user-text-editing__textarea {
        width: 600px;
        height: 300px;
        padding: 10px;

        background-color: #fff;
        border: ${border}
        resize: none;

        &:focus {
            outline: none;
        }
    }

    & .user-text-editing__buttons {
        display: flex;
        justify-content: flex-end;
        column-gap: 20px;
        width: 100%
    }
`;

export default StyledUserTextEditing;