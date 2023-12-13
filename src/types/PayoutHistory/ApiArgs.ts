import { CancelTokenSource } from "services/httpService";

type PayoutHistoryArgs = {
  page: number;
  searchedValue: string;
  cancelToken: CancelTokenSource | null;
  setCancelToken: (cancelToken: CancelTokenSource) => void;
}

export default PayoutHistoryArgs;
