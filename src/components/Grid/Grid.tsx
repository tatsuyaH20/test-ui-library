interface Props {
  /** 子要素 */
  children: React.ReactNode;
  /** カラム */
  column: 1 | 2 | 3;
}

const columnClass = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
} as const;

export const Grid = ({ children, column }: Props) => {
  return <div className={`grid ${columnClass[column]}`}>{children}</div>;
};
