"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

function getHash(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : null;
}

function isNavActive(pathname: string, hash: string, href: string) {
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === getHash(href);
  }
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLink({
  href,
  label,
  onClick,
  className = "",
  activeClassName = "text-foreground",
  inactiveClassName = "text-muted-foreground hover:text-foreground",
}: NavLinkProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash.replace("#", ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const active = isNavActive(pathname, hash, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${active ? activeClassName : inactiveClassName}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
