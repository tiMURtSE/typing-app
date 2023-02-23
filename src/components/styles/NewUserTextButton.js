import styled from "styled-components";
import { activeButton, border } from "./GlobalStyles";

const StyledNewUserTextButton = styled.div`
    display: flex;
    align-items: flex-end;
    width: 45%;
    height: 135px;

    & .new-user-text__inner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 50%;

        border: ${border};
        cursor: pointer;

        &:hover {
            background-color: var(--light-grey);
        }
    }

    & .new-user-text__label {
        position: relative;
        margin-left: 10px;

        font-family: Raleway, sans-serif;
        font-size: var(--small-font-size);
        opacity: 0.5;

        &::before {
            content: '+';
            position: absolute;
            top: 50%;
            left: -30%;
            z-index: 10;
            transform: translateY(-50%);

            font-family: sens-serif;
            font-size: 50px;
            color: var(--dark);
        }
    }
`;

export default StyledNewUserTextButton;