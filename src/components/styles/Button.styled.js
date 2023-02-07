import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 5px 25px;

    border: 4px solid var(--dark);
    cursor: pointer;

    ${({ props }) => props};
    &:active {
        background-color: var(--dark);
        color: #fff;
    }
`