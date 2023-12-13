import PayoutHistoryItem from "types/PayoutHistory/Item";

type PayoutHistoryApi = {
  metadata: {
    page: number;
    limit: number;
    totalCount: number;
  };
  data: PayoutHistoryItem[];
}

export default PayoutHistoryApi;
