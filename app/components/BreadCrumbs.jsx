'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getBreadcrumbPaths(asPath){
    const paths = asPath.split('/').filter(path => path !== '');

    const breadcrumbPaths = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`;
      const label = path.replace(/-/g, ' ');
      return { href, label };
    });
  
    return [{ href: '/', label: 'Home' }, ...breadcrumbPaths];
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbPaths = getBreadcrumbPaths(pathname);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbPaths.map(({ href, label }, index) => (
          <li key={index} className="breadcrumb-item">
            {href ? (
              <Link href={href}>
                {label}
              </Link>
            ) : (
              <span>{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;