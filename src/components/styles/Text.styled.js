import styled from "styled-components";

const StyledText = styled.div`
    min-height: 200px;
    overflow: auto;

    &:focus {
        outline: none;
    }
    
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

export default StyledText;