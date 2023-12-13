import dayjs from "dayjs";

export const formatDate = (value: string): string =>
  value.length > 0 ? dayjs(value).format("ddd, MMM D, H:mm") : "";
