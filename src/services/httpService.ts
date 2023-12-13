import axios, { AxiosResponse, CancelTokenSource, AxiosError } from "axios";

import GetRequestCancelTokenArguments from "types/GetRequestCancelTokenArguments";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getWithCancelToken = <T>({
  url,
  cancelToken,
  setCancelToken,
}: GetRequestCancelTokenArguments): Promise<AxiosResponse<T>> => {
  if (cancelToken) cancelToken.cancel("Cancelled Request");

  const source = CancelToken.source();
  setCancelToken(source);

  const request: Promise<AxiosResponse<T>> = axiosInstance.get(url, {
    cancelToken: source?.token,
  });

  return request;
};

export default axiosInstance;

export type { AxiosResponse, CancelTokenSource, AxiosError };
export const CancelToken = axios.CancelToken;
export const isCancel = axios.isCancel;
