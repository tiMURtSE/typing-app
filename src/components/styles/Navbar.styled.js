import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 30px;
    padding: 20px 50px 20px;
    // margin-top: -10px;

    box-shadow: 10px 10px 0px 0px var(--cream);
    border-left: 4px solid var(--dark);
    border-right: 4px solid var(--dark);
    border-bottom: 4px solid var(--dark);

    & a:hover {
        text-decoration: underline 4px solid var(--dark);
    }

    & a:active {
        background-color: var(--dark);
        color: #fff;
    }
`