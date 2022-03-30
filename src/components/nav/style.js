import Styled from "styled-components";

export const Stnav = Styled.nav`
background-color: #000000;
padding: 10px;
border-radius: 30px 0 0 30px;
grid-row: span 3;
@media(max-width: 991px) {
    grid-column: span 3;
    grid-row: 1 / span 1;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 0;
}
`
export const Sth1 = Styled.h1`
padding: 20px;
color: var(--light-color);
font-family: 'Euclid Flex';
font-size: 21px;
border: 1px solid var(--main-color);
border-radius: 50%;
text-transform: uppercase;
@media(max-width: 991px) {
    font-size: 17px;
    padding: 10px;
}
`

export const Headpart = Styled.div`
width: 55px;
text-align: right;
@media(max-width: 991px) {
    width: 50px;
}
`
export const Iconlist = Styled.ul`
list-style: none;
padding-top: 50px;
@media(max-width: 991px) {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
}
`

export const Iconitem = Styled.li`
padding: 20px;
text-align: center;
cursor: pointer;
`

export const Icon = Styled.i`
font-size: 25px;
color: ${props => props.active ? "var(--main-color)" : "var(--light-color)"};
`