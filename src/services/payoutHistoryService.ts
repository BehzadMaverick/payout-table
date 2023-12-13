import PayoutHistoryArguments from "types/PayoutHistory/ApiArguments";
import { getWithCancelToken } from "services/httpService";

export const getPayoutHistory = <T>({
  page,
  searchedValue,
  cancelToken,
  setCancelToken,
}: PayoutHistoryArguments) => {
  const url = searchedValue.length
    ? `/search?query=${searchedValue}`
    : `/payouts?page=${page}`;

  return getWithCancelToken<T>({ url, cancelToken, setCancelToken });
};
