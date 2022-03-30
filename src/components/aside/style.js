import Styled from "styled-components";
import {Flex} from "../template/style";


export const Staside = Styled.aside`
background-color: var(--light-color);
border-radius: 0 30px 30px 0;
padding: 50px;
grid-row: span 3;
@media(max-width: 1200px) {
    padding: 20px;
}
@media(max-width: 991px) {
    grid-column: 1 / span 3;
    grid-row: 2 / span 1;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-beteen;
    align-items: center;
    flex-direction: row-reverse;
    gap: 20px;
    border-radius: 0;
}
`;
export const Mediahandler = Styled.div`
@media(max-width: 991px) {
    width: calc(25% - 30px);
}
@media(max-width: 767px) {
    width: calc(50% - 30px);
}
`;
export const Owner = Styled(Flex)`
@media(max-width: 767px) {
    flex-direction: column-reverse;
}
`;
export const Icon = Styled.i`
font-size: 30px;
@media(max-width: 991px) {
    font-size: 20px;
}
`;
export const Namespan = Styled.span`
display: inline-block;
margin-right: 10px;
font-family: 'Circular Std Book';
font-size: 21px;
@media(max-width: 767px) {
    flex-direction: column-reverse;
    font-size: 15px;
}
`;
export const Image = Styled.img`
width: 62px;
height: 62px;
`
export const Searchcontainer = Styled(Flex)`
border: 1px solid #000000;
background-color: white;
padding: 15px 10px;
margin: 20px 0;
`;
export const Stinput = Styled.input`
width: 90%;
border: none;
outline: none;
`;
export const Stp = Styled.p`
font-family: 'Circular Std';
font-size: 11px;
padding: 10px 0;
`;
export const Numbers = Styled.p`
font-family: 'Circular Std Book';
font-size: 40px;
`;
export const Quick = Styled.div`
margin: 20px 0;
@media(max-width: 991px) {
    width: calc(50% - 30px);
}
@media(max-width: 767px) {
    width: calc(100% - 20px);
}
`;
export const Accessflex = Styled.div`
@media(max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px
}
`;
export const Access = Styled(Flex)`
height: 145px;
padding: 20px 10px;
border-bottom: 1px solid #000000;
gap: 25px;
@media(max-width: 991px) {
    gap: 15px;
}
`;
export const Iconcontainer = Styled(Flex)`
width: 70px;
height: 70px;
background-color: #000000;
border-radius: 50%;
justify-content: center;
@media(max-width: 991px) {
    width: 50px;
    height: 50px;
}
`;
export const Accessicon = Styled.i`
color: var(--light-color);
font-size: 30px;
@media(max-width: 991px) {
    font-size: 20px;
}
`;
export const Sth3 = Styled.h3`
font-family: 'Circular Std';
font-size: 15px;
`;
export const Staccess = Styled.div`
flex: 1;
`;
export const Accessp = Styled.p`
font-family: 'Circular Std Book';
font-size: 15px;
padding-top: 20px;
`;