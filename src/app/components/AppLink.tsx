"use client";

import { Link as UILink, type LinkProps } from "@nextui-org/react";
import Link, { type LinkProps as NLinkProps } from "next/link";
import { usePathname } from "next/navigation";

export default function AppLink({
  href,
  children,
  className,
  matches,
  ...props
}: Partial<LinkProps & NLinkProps & { matches: string[] }>) {
  const pathname = usePathname();

  return (
    <UILink
      as={Link}
      href={href}
      aria-current="page"
      color="foreground"
      className={
        (matches?.includes(pathname) || pathname === href ? "text-rose-600 font-semibold" : "") +
        (className ? " " + className : "")
      }
      {...props}
    >
      {children}
    </UILink>
  );
}
