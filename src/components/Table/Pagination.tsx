import { useState, useEffect, useCallback } from "react";

import {
  PaginationContainer,
  PageButton,
  Ellipsis,
} from "components/Table/Table.styles";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const updateVisiblePages = useCallback(() => {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
    setVisiblePages(pages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    updateVisiblePages();
  }, [currentPage, totalPages, updateVisiblePages]);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </PageButton>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </PageButton>
      {visiblePages[0] !== 1 && <Ellipsis>...</Ellipsis>}
      {visiblePages.map((page) => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageButton>
      ))}
      {visiblePages[visiblePages.length - 1] !== totalPages && (
        <Ellipsis>...</Ellipsis>
      )}
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </PageButton>
      <PageButton
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
