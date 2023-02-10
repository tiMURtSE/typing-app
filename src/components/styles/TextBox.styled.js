import styled from "styled-components";

export const StyledTextBox = styled.div`
    padding: 40px 50px;

    box-shadow: 10px 10px 0px 0px var(--cream);
    border: 4px solid var(--dark);

    & .button-area {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 4px solid var(--dark);
    }

    & .table {
        border: 4px solid var(--dark);
        width: 100%;
    }
`