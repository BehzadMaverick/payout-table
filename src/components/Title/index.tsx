import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: ${({ theme }) => `${theme.spacing(6)}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(7.5)}`};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export default Title;
