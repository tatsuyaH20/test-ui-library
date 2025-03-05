type Props = {
    href: string;
    children: React.ReactNode;
};
type AnchorType = Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'children'>;
type CustomLinkProps = {
    as: React.ComponentType<Props & AnchorType>;
} & AnchorType & Props;
export declare const CustomLink: ({ as: LinkComponent, href, children, ...props }: CustomLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
