type HeadCells<T> = {
  label: string;
  key?: string;
  render?: (item: T) => JSX.Element;
};

export default HeadCells;
