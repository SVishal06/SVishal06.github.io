"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          S Vishal
        </Link>
        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname === `${link.href}/`;

            return (
              <Link
                key={link.href}
                href={link.href as Route}
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
