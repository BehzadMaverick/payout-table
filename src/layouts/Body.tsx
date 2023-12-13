import styled from "styled-components";

const Body = styled.div`
  margin: ${({ theme }) => `0 ${theme.spacing(4)}`};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: ${({ theme }) => `0 ${theme.spacing(2)}`};
  }
`;

export default Body;
