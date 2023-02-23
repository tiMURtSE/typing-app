import styled from "styled-components";
import { activeButton, border } from "./GlobalStyles";

const StyledTextBox = styled.div`
    min-height: 70vh;
    padding: 40px 50px;
    overflow: auto;

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
        text-align: center;

        border: none;
        border-collapse: collapse;
    }

    & .text-box__wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 20px;
    }
`

export default StyledTextBox;