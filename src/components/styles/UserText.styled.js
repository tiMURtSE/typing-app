import styled from "styled-components";

const StyledUserText = styled.div`
    border: 4px solid var(--dark);

    & .text {
        overflow-x: scroll;
    }

    & .buttons {
        display: flex;

        font-size: 18px;
    }

    & button {
        flex: 1 1 0;

        border: 0;
        border-top: 4px solid var(--dark);
        border-right: 4px solid var(--dark);
        cursor: pointer;
    }

    & button:last-child {
        border-right: 0;
    }
` 

export default StyledUserText;