import styled from "styled-components";

export const StyledTextBox = styled.div`
    margin-top: 70px;

    display: flex;
    flex-direction: column;

    box-shadow: 10px 10px 30px 0px #9e9d9d;
    border: 4px solid var(--dark);

    & .text-area {
        max-height: 450px;
        padding: 50px;

        border-bottom: 4px solid var(--dark);
        overflow: auto;
    }

    & .button-area {
        display: flex;
        justify-content: flex-end;
        padding: 20px 50px;
    }

`