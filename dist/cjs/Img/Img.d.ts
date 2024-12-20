import { type ImageProps } from 'next/image';
import Link from 'next/link';
type PartiallyPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
interface Props extends PartiallyPartial<ImageProps, 'alt'> {
    /** リンクにする場合のhref */
    href?: React.ComponentProps<typeof Link>['href'];
    /** linkに属性を追加する場合 */
    link?: Omit<React.ComponentProps<typeof Link>, 'children' | 'href'>;
}
/**
 * Imgコンポーネント
 */
export declare const Img: ({ href, link, alt, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
