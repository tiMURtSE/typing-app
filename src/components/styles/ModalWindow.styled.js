import styled from "styled-components";

export const StyledModalWidnow = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(61 61 61 / 0.5);

    & .inner-window {
        position: relative;
        width: 500px;
        height: 300px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;

        background-color: #fff;
        border: 4px solid var(--dark);
    }

    & .inner-window__label {
        font-size: 35px;
    }
`