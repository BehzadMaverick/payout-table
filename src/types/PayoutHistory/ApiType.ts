import PayoutHistoryItem from "types/PayoutHistory/Item";

type PayoutHistoryApiType = {
  metadata: {
    page: number;
    limit: number;
    totalCount: number;
  };
  data: PayoutHistoryItem[];
}

export default PayoutHistoryApiType;
