import Styled from "styled-components";


export const Maincontent = Styled.main`
padding: 10px 20px;
grid-row: span 3;
@media(max-width: 991px) {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    padding: 10px 10px;
}
`;
export const Datacontainer = Styled.section`
min-height: 50%;
`;
export const Stselect = Styled.select`
padding: 10px;
font-family: 'Circular Std Book';
font-size: 15px;
`;
export const Analysis = Styled.div`
max-width: calc(100% - 40px);
margin: auto;
padding: 20px 0;
`;
