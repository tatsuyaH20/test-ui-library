type Props = {
  href: string;
  children: React.ReactNode;
};
type AnchorType = Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'children'>;
type CustomLinkProps = {
  as: React.ComponentType<Props & AnchorType>;
} & AnchorType &
  Props;

export const CustomLink = ({ as: LinkComponent, href, children, ...props }: CustomLinkProps) => {
  return (
    <LinkComponent href={href} {...props}>
      {children}
    </LinkComponent>
  );
};
