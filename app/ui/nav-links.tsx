'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/outline';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'DASHBOARD', href: '/', icon: HomeIcon },
  { name: 'Analytics', href: '/alerts', icon: DocumentDuplicateIcon },
  { name: 'Extensions', href: '/studio', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
    <div className="flex h-[48px] space-x-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium  hover:bg-[#21464e] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' bg-[#21464e]': pathname === link.href,
              },
            )}       
           >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      </div>
    </>
  );
}
