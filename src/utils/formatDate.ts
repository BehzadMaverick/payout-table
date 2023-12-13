import dayjs from "dayjs";

export const formatDate = (value: string): string =>
  dayjs(value).format("ddd, MMM D, H:mm");
