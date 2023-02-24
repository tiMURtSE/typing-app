import styled from "styled-components";
import { activeButton, border } from "./GlobalStyles";
import background from '../../../src/assets/icons8-клавиатура-750.png';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;

    background-color: #fff;
    box-shadow: 10px 10px 0px 0px var(--cream);
    border-left: ${border};
    border-right: ${border};
    border-bottom: ${border};

    & .navbar__logo {
        width: 60px;
        height: 40px;

        background-image: url(${background});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #fff;
        cursor: pointer;
    }
    
    & .navbar__nav {
        display: flex;
        column-gap: 30px;

        
        & a:hover {
            text-decoration: underline ${border};
        }

        & a:active {
            ${activeButton}
        }
    }
`;

export default StyledNavbar;