"use client";

import { Link as UILink, type LinkProps } from "@nextui-org/react";
import Link, { type LinkProps as NLinkProps } from "next/link";
import { useHash } from "@/app/providers";

export default function AppLink({
  href,
  className,
  matches,
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
        (matches?.includes(hash) || hash === href
          ? "text-red-500 dark:text-red-900 font-semibold"
          : "text-[var(--foreground-color)]") +
        (className ? " " + className : "")
      }
      onClick={() =>
        dispatchEvent(
          new HashChangeEvent("hashchange", {
            oldURL: hash,
            newURL: href,
          })
        )
      }
      {...props}
    />
  );
}
