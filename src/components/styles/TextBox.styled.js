import styled from "styled-components";

const StyledTextBox = styled.div`
    padding: 40px 50px;

    background-color: #fff;
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
        width: 100%;
        border: 2px solid #fff;
        border-collapse: collapse;
    }

    & .table th {
        padding-bottom: 10px;
        line-height: 1;

        border: none;
        border-bottom: 4px solid black;
        border-right: 4px solid black;
    }

    & .table th:last-child {
        border-right: none;
    }
`

export default StyledTextBox;