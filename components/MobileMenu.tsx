import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/snippets', label: 'Snippets' },
  { href: '/uses', label: 'Uses' },
  { href: '/chat', label: 'Chat' }
];

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 240
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'absolute flex flex-col bg-[#f5f5f7]/95 dark:bg-black/95 md:hidden',
            isMenuRendered && styles.menuRendered
          )}
        >
          {links.map((link, index) => (
            <li
              key={link.href}
              className="text-[#1d1d1f] dark:text-[#f5f5f7]"
              style={{ transitionDelay: `${120 + index * 40}ms` }}
            >
              <Link
                href={link.href}
                className="flex w-full py-3 text-[28px] font-semibold tracking-[-0.022em]"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute h-5 w-5 text-[#1d1d1f] dark:text-[#f5f5f7]"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M3 7h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 13h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute h-5 w-5 text-[#1d1d1f] dark:text-[#f5f5f7]"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
