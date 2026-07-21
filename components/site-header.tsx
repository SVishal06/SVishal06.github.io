"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          Vishal <span>/ portfolio</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} data-active={isActive}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

