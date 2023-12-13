import PayoutHistoryApiType from "types/PayoutHistory/ApiType";
import PayoutHistoryItem from "types/PayoutHistory/Item";

type ResponseType = PayoutHistoryApiType | PayoutHistoryItem[];

export default ResponseType;
