import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  color: ${({ theme }) => theme.colors.tableHeader};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: ${({ theme }) => `${theme.spacing(1.5)}`};
  padding: ${({ theme }) => `${theme.spacing(1.5)}`};
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => `${theme.spacing(2)}`};
`;

export const TableCellSpan = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => `${theme.spacing(3)}`};
`;

export const UsernameValueSpan = styled(TableCellSpan)`
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const DateSpan = styled(TableCellSpan)`
  color: ${({ theme }) => theme.colors.tableHeader};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    width: ${({ theme }) => `${theme.spacing(14)}`};
  }
`;

export const StatusSpan = styled(TableCellSpan)`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(1.25)}`};
  color: ${({ theme }) => theme.colors.subtitle};
  border-radius: ${({ theme }) => `${theme.spacing(0.75)}`};
  text-align: center;
`;

export const PendingSpan = styled(StatusSpan)`
  background-color: ${({ theme }) => theme.colors.pending};
`;

export const PaidSpan = styled(StatusSpan)`
  background-color: ${({ theme }) => theme.colors.paid};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => `${theme.spacing(2.5)}`};
`;

export const PageButton = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  margin: ${({ theme }) => `0 ${theme.spacing(0.5)}`};
  cursor: pointer;
  border: none;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary : "transparent"};
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.black};
  border-radius: ${({ theme }) => `${theme.spacing(0.5)}`};

  &:hover {
    background-color: ${(props) =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.grey};
  }
`;

export const Ellipsis = styled.span`
  margin: ${({ theme }) => `0 ${theme.spacing(0.5)}`};
  font-size: ${({ theme }) => theme.typography.size.md};
`;
