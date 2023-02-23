import styled from "styled-components";
import { activeButton } from "./GlobalStyles";

export const StyledButton = styled.button`
    padding: 5px 25px;

    background-color: ${props => props.backgroundColor || 'inherit'};
    border: 4px solid var(--dark);
    cursor: pointer;

    &:active {
        ${activeButton}
    }
`