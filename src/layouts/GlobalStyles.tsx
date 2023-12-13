import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  h1 {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: 600;
  }
`;

export default GlobalStyles;
