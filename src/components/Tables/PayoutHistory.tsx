import { useState, useEffect, useCallback } from "react";

import Table from "components/Table";
import useTableHeader from "components/Tables/TableHeader";
import PayoutHistoryItem from "types/PayoutHistory/Item";
import Search from "components/Search";
import Loader from "components/Loader";
import ResponseType from "types/PayoutHistory/ResponseType";
import CancelTokenType from "types/CancelToken";
import { getPayoutHistory } from "services/payoutHistoryService";
import { withTryCatch } from "utils/withTryCatch";
import { ITEMS_PER_PAGE } from "constants/index";

const PayoutHistory = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState<PayoutHistoryItem[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [cancelToken, setCancelToken] = useState<CancelTokenType>(null);

  const tableHeader = useTableHeader();

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    },
    [totalPages]
  );

  useEffect(() => {
    withTryCatch<ResponseType>({
      getData: () =>
        getPayoutHistory<ResponseType>({
          page: currentPage,
          searchedValue,
          cancelToken,
          setCancelToken,
        }),
      onSuccess: (response) => {
        setCancelToken(null);
        let data: PayoutHistoryItem[],
          count = 0;
        if (!Array.isArray(response)) {
          data = response.data;
          count = response.metadata.totalCount;
        } else data = response;
        setTableData(data);
        searchedValue.length > 0
          ? setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE))
          : setTotalPages(Math.ceil(count / ITEMS_PER_PAGE));
      },
      finallyFunc: () => setIsLoading(false),
    });
    /* eslint-disable-next-line */
  }, [searchedValue, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchedValue]);

  return (
    <>
      {isLoading && <Loader />}
      <Search
        type="search"
        placeholder="Search..."
        value={searchedValue}
        onChange={({ target: { value } }) => setSearchedValue(value)}
      />
      {isLoading ? (
        <div>Fetching Data...</div>
      ) : (
        <Table
          tableHeader={tableHeader}
          tableData={tableData}
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          isPaginationFE={searchedValue.length > 0}
        />
      )}
    </>
  );
};

export default PayoutHistory;
