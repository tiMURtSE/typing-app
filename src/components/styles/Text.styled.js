import styled from "styled-components";

export const StyledText = styled.div`
    max-height: 450px;
    padding: 50px;

    border-bottom: 4px solid var(--dark);
    overflow: auto;
    
    & .curr {
        background-color: green;
        color: #fff;
    }

    & .completed {
        color: green;
    }

    & .wrong {
        background-color: red;
    }
`