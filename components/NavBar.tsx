'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { NAV_ITEMS } from './navItems';

function NavLink({
  href,
  children,
  exact = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  /** If true, only highlight when pathname === href (e.g., About) */
  exact?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  // Active rules:
  // - exact=true  => active only on exact match
  // - exact=false => active on exact or when pathname starts with href + "/"
  const isExact = pathname === href;
  const isNested = !exact && href !== '/' && pathname?.startsWith(href + '/');
  const isActive = isExact || isNested;

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
      className={
        'transition-colors nav-link ' +
        (isActive ? 'text-slate-900 font-medium' : '')
      }
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  // Close the sheet on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close menu
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="border-b border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="section flex h-14 items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="logo" onClick={close}>
          <img src="/icon.svg" alt="" className="h-5 w-5" />
          <span>CityScout</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden inline-flex items-center justify-center rounded-md px-2 py-1 hover:bg-[color:var(--surface-2)]"
          onClick={toggle}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--surface)]"
        >
          <div className="section py-3 flex flex-col gap-3 text-sm">
            {NAV_ITEMS.map(item => (
              <NavLink key={item.href} href={item.href} onClick={close}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
