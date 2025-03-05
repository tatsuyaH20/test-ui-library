type Props = {
  /** 子要素 */
  children: React.ReactNode;
  width?: `w-[${number}px]`;
};

export const Text = ({ children }: Props) => {
  return <p className="text-base p-4 w-[110px]">{children}</p>;
};
