import { toast } from "react-toastify";

import { AxiosResponse, AxiosError, isCancel } from "services/httpService";
import { getProperty } from "utils/getProperty";
import { SUCCESSFUL_RESPONSE, STATUS_CODES } from "constants/index";

type withTryCatchType<T> = {
  getData: () => Promise<AxiosResponse<T>> | undefined;
  onSuccess: (data: T) => void;
  onFailure?: (error: AxiosError) => void;
  onSettled?: () => void;
};

export const withTryCatch = async <T>({
  getData,
  onSuccess,
  onFailure,
  onSettled,
}: withTryCatchType<T>): Promise<void> => {
  try {
    const response = await getData();

    if (response?.status === SUCCESSFUL_RESPONSE) {
      onSuccess(response?.data);
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    onFailure?.(axiosError);
    if (!isCancel(error)) {
      if (axiosError.response) {
        toast.error(
          `Server responded with an error: ${getProperty(
            STATUS_CODES,
            axiosError.response.status
          )}`
        );
      } else if (axiosError.request) {
        toast.error(
          `No response received. Please check your internet connection and try again`
        );
      } else {
        toast.error(`Error during request setup: ${axiosError.message}`);
      }
    }
  } finally {
    onSettled?.();
  }
};
