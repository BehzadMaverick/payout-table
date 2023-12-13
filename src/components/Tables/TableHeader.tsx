import { useMemo } from "react";

import HeadCells from "types/HeadCells";
import PayoutHistoryItem from "types/PayoutHistory/Item";
import {
  UsernameValueSpan,
  PendingSpan,
  PaidSpan,
  DateSpan,
} from "components/Table/Table.styles";
import { PAID_STATUS } from "constants/index";
import { formatDate } from "utils/formatDate";

const useTableHeader = () => {
  const tableHeader: HeadCells[] = useMemo(
    () => [
      {
        label: "Username",
        render: (item: PayoutHistoryItem) => (
          <UsernameValueSpan>{item.username || "N/A"}</UsernameValueSpan>
        ),
      },
      {
        label: "Date & Time",
        key: "dateAndTime",
        render: (item: PayoutHistoryItem) => (
          <DateSpan>
            {formatDate(item.dateAndTime)}
          </DateSpan>
        ),
      },
      {
        label: "Status",
        render: (item: PayoutHistoryItem) =>
          PAID_STATUS.includes(item.status.toLowerCase()) ? (
            <PaidSpan>{item.status}</PaidSpan>
          ) : (
            <PendingSpan>{item.status}</PendingSpan>
          ),
      },
      {
        label: "Value",
        render: (item: PayoutHistoryItem) => (
          <UsernameValueSpan>{item.value}</UsernameValueSpan>
        ),
      },
    ],
    []
  );

  return tableHeader;
};

export default useTableHeader;
