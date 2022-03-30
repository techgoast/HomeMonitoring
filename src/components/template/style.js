import Styled from "styled-components";

export const Container = Styled.div`
min-height: 100vh;
display: grid;
grid-template-columns: auto 1fr 25%;
grid-template-rows: repeat(2, auto) 1fr
`;
export const Flex = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Sth2 = Styled.h2`
font-family: 'Circular Std Book';
font-size: 29px;
text-align: center;
@media(max-width: 767px) {
    font-size: 20px;
}
`;
