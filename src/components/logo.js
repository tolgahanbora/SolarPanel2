/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'flex-start',
        mr: 'auto',

      }}
    >
      <Image width="200px" 
         src={image} alt="startup landing logo" />
    </Link>
  );
}
