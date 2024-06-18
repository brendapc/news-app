"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className={isActive ? "active" : ""} href={href}>{children}</Link>
  );
}