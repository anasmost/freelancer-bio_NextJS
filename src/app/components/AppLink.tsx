"use client";

import { Link as UILink, type LinkProps } from "@nextui-org/link";
import Link, { type LinkProps as NLinkProps } from "next/link";
import { useHash } from "@/providers";

export default function AppLink({
  href,
  className,
  matches,
  onClick,
  ...props
}: Partial<LinkProps & NLinkProps & { matches: string[] }>) {
  const hash = useHash();

  return (
    <UILink
      as={Link}
      href={href}
      replace={true}
      aria-current="location"
      color="foreground"
      className={
        "uppercase " +
        (matches?.includes(hash) || href === hash
          ? "text-red-500 dark:text-red-700 scale-105"
          : "text-[var(--foreground-color)]") +
        (className ? " " + className : "")
      }
      onClick={(e) => {
        dispatchEvent(
          new HashChangeEvent("hashchange", {
            oldURL: hash,
            newURL: href,
          })
        );
        onClick?.(e);
      }}
      {...props}
    />
  );
}
