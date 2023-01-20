'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ActiveLinkProps } from './ActiveLinkProps';

export function ActiveLink({ href, childre, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();

  const isCurrentPath = pathname == href;

  return (
    <Link
      {...rest}
      href={href}
      style={{ backgroundColor: `${isCurrentPath ? 'red' : 'transparent'}` }}
    >
      {childre}
    </Link>
  );
}
