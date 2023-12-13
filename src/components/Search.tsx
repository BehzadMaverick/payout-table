import styled from "styled-components";

const Search = styled.input`
  width: 30%;
  font-size: ${({ theme }) => theme.typography.size.sm};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2.5)}`};
  margin: ${({ theme }) => `${theme.spacing(2)} 0`};
  box-sizing: border-box;
  border: ${({ theme }) => `1px solid ${theme.colors.borderColor}`};
  border-radius: ${({ theme }) => `${theme.spacing(0.5)}`};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 75%;
  }
`;

export default Search;
