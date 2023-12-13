import CancelTokenType from "types/CancelToken";
import { CancelTokenSource } from "services/httpService";

type GetRequestCancelTokenArguments = {
  url: string;
  cancelToken: CancelTokenType;
  setCancelToken: (source: CancelTokenSource) => void;
};

export default GetRequestCancelTokenArguments;
