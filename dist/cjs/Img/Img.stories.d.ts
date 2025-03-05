import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ href, link, alt, ...props }: {
        href?: React.ComponentProps<import("react").ForwardRefExoticComponent<Omit<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, keyof {
            href: any;
            as?: any;
            replace?: boolean;
            scroll?: boolean;
            shallow?: boolean;
            passHref?: boolean;
            prefetch?: boolean | null;
            locale?: string | false;
            legacyBehavior?: boolean;
            onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
            onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
            onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        }> & {
            href: any;
            as?: any;
            replace?: boolean;
            scroll?: boolean;
            shallow?: boolean;
            passHref?: boolean;
            prefetch?: boolean | null;
            locale?: string | false;
            legacyBehavior?: boolean;
            onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
            onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
            onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        } & {
            children?: React.ReactNode | undefined;
        } & import("react").RefAttributes<HTMLAnchorElement>>>["href"];
        link?: Omit<React.ComponentProps<import("react").ForwardRefExoticComponent<Omit<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, keyof {
            href: any;
            as?: any;
            replace?: boolean;
            scroll?: boolean;
            shallow?: boolean;
            passHref?: boolean;
            prefetch?: boolean | null;
            locale?: string | false;
            legacyBehavior?: boolean;
            onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
            onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
            onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        }> & {
            href: any;
            as?: any;
            replace?: boolean;
            scroll?: boolean;
            shallow?: boolean;
            passHref?: boolean;
            prefetch?: boolean | null;
            locale?: string | false;
            legacyBehavior?: boolean;
            onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
            onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
            onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        } & {
            children?: React.ReactNode | undefined;
        } & import("react").RefAttributes<HTMLAnchorElement>>>, "children" | "href">;
    } & Omit<import("next/image").ImageProps, "alt"> & Partial<Pick<import("next/image").ImageProps, "alt">>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BaseImg: Story;
export declare const LinkImg: Story;
