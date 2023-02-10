import styled from "styled-components";

export const StyledText = styled.div`
    overflow: auto;
    
    & .curr {
        background-color: var(--dark);
        color: #fff;
    }

    & .completed {
        background-color: var(--green);
        color: var(--dark);
    }

    & .wrong {
        background-color: var(--red);
        color: #fff;
    }
`