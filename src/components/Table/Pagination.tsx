import { useState, useEffect, useCallback } from "react";

import { MAX_VISIBLE_PAGES } from "constants/index";
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
    const halfVisiblePages = Math.floor(MAX_VISIBLE_PAGES / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);

    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
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
