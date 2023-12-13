import { CancelTokenSource } from "services/httpService";

type PayoutHistoryArguments = {
  page: number;
  searchedValue: string;
  cancelToken: CancelTokenSource | null;
  setCancelToken: (cancelToken: CancelTokenSource) => void;
}

export default PayoutHistoryArguments;
