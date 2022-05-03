import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    font-family: 'Inter';
    font-style: normal;
}
`;
export const ContainerWrapper = styled.div`
  margin: 15px 70px 0;
       position: relative;
      @media screen and (max-width: 992px) {
       margin:15px 100px;
      }
      @media screen and (max-width: 768px) {
       margin:15px 80px;
      }
      @media screen and (max-width: 576px) {
       margin:15px 20px;
      }
`;

export default GlobalStyle;

