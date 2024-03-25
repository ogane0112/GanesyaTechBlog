'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getBreadcrumbPaths(asPath) {
  const paths = asPath.split('/').filter(path => path !== '');
  const breadcrumbPaths = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path.replace(/%/g, ' ');
    return { href, paths };
  });
  return [{ href: '/', label: 'Home' }, ...breadcrumbPaths];
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbPaths = getBreadcrumbPaths(pathname);

  return (
    <nav aria-label="Breadcrumb" className="bg-white text-gray-600">
      <ol className="flex items-center space-x-2">
        {breadcrumbPaths.map(({ href, label }, index) => (
          <li key={index} className={`flex items-center ${index === breadcrumbPaths.length - 1 ? 'text-gray-800 font-semibold' : ''}`}>
            {href ? (
              <Link href={href} className="hover:text-indigo-600 transition-colors">
                {label}
              </Link>
            ) : (
              <span>{label}</span>
            )}
            {index !== breadcrumbPaths.length - 1 && (
              <span className="mx-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;