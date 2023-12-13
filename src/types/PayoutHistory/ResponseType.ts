import PayoutHistoryApi from "types/PayoutHistory/ApiType";
import PayoutHistoryItem from "types/PayoutHistory/Item";

type PayoutHistoryResponse = PayoutHistoryApi | PayoutHistoryItem[];

export default PayoutHistoryResponse;
