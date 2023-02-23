import styled from "styled-components";

const StyledHighscoreItem = styled.tr`
    border: none;

    &:nth-child(even) {
        background-color: #f0f0f0;
    }

    & td {
        padding: 10px 0;
    }
`

export default StyledHighscoreItem;