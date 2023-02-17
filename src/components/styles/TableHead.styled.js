import styled from "styled-components";

const StyledTableHead = styled.tr`
    border: none;

    & th {
        padding: 15px 0;

        border: none;
        border-bottom: 4px solid black;

        &.table__header-data {
            cursor: pointer;

            &:hover {
                background-color: #f0f0f0;
            }

            &.descending-order span::after {
                display: block;
            }

            &.ascending-order span::after {
                display: block;
                transform: rotate(180deg);
            }
        }

        &:last-child {
            border-right: none;
        }

        & span {
            position: relative;
            user-select: none;

            &::after {
                display: none;
                content: '';
                position: absolute;
                top: 44%;
                right: -35px;
                width: 0px;
                height: 0px;
        
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid var(--dark);
            }
        }
    }
`

export default StyledTableHead;