import PayoutHistoryArgs from "types/PayoutHistory/ApiArgs";
import { getWithCancelToken } from "services/httpService";

export const getPayoutHistory = <T>({
  page,
  searchedValue,
  cancelToken,
  setCancelToken,
}: PayoutHistoryArgs) => {
  const url = searchedValue.length
    ? `/search?query=${searchedValue}`
    : `/payouts?page=${page}`;

  return getWithCancelToken<T>(url, cancelToken, setCancelToken);
};
