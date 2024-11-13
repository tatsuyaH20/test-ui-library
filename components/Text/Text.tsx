interface Props {
  children: React.ReactNode;
}

export const Text = ({ children }: Props) => {
  return <p className="text-base text-neutral-950">{children}</p>;
};
