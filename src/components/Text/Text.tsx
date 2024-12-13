interface Props {
  /** 子要素 */
  children: React.ReactNode;
}

export const Text = ({ children }: Props) => {
  return <p className="text-base">{children}</p>;
};
