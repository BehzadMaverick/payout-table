import styled from "styled-components";

const Container = styled.div`
  margin: ${({ theme }) => `${theme.spacing(12)} ${theme.spacing(6)}`};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(4)}`};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(0.5)}`};
  }
`;

export default Container;
