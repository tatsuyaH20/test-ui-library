import Link from 'next/link';
import { CustomLink } from './Link';

const Test = () => {
  return (
    <CustomLink as={Link} href="/home">
      Home
    </CustomLink>
  );
};
