import Image, { type ImageProps } from 'next/image';
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
export const Img = ({ href, link, alt = '', ...props }: Props) => {
  const ImgComponent = () => <Image className="" alt={alt} {...props} />;

  return href !== undefined ? (
    <Link className="hover:opacity-75 inline-block" href={href} {...link}>
      <ImgComponent />
    </Link>
  ) : (
    <ImgComponent />
  );
};
