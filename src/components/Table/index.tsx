import { useCallback } from "react";

import HeadCells from "types/HeadCells";
import Pagination from "components/Table/Pagination";
import {
  TableContainer,
  TableWrapper,
  TableHeader,
  TableRow,
  TableCell,
} from "components/Table/Table.styles";
import { getProperty } from "utils/getProperty";
import { ITEMS_PER_PAGE } from "constants/index";

type TableProps<T> = {
  tableHeader: HeadCells[];
  tableData: T[];
  currentPage: number;
  totalPages: number;
  itemsPerPage?: number;
  isPaginationFE?: boolean;
  handlePageChange: (pageNumber: number) => void;
}

const Table = <T,>({
  tableHeader,
  tableData,
  currentPage,
  handlePageChange,
  totalPages,
  isPaginationFE = false,
  itemsPerPage = ITEMS_PER_PAGE,
}: TableProps<T>) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isPaginationFE
    ? tableData.slice(indexOfFirstItem, indexOfLastItem)
    : tableData;

  const getTableCellComponent = useCallback((tableHead: HeadCells, item: T) => {
    const key = (tableHead?.key || tableHead.label.toLowerCase()) as string;
    let value = getProperty(item, key as keyof T) as string;

    if (tableHead.render) {
      return <TableCell key={key}>{tableHead.render(item)}</TableCell>;
    }
    return <TableCell key={key}>{value}</TableCell>;
  }, []);

  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>
            {tableHeader.map(({ label }) => (
              <TableHeader key={label}>{label}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <TableRow key={index}>
                {tableHeader.map((tableHead) =>
                  getTableCellComponent(tableHead, item)
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No Records Found</TableCell>
            </TableRow>
          )}
        </tbody>
      </TableWrapper>
      {currentItems.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </TableContainer>
  );
};

export default Table;
