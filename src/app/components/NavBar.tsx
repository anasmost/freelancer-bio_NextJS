"use client";

import { zeyada } from "@/app/fonts";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { startTransition, useState } from "react";
import AppLink from "./AppLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => startTransition(() => setIsMenuOpen(false));

  return (
    <Navbar
      className="py-1 backdrop-blur-lg bg-opacity-25 shadow-sm shadow-[var(--shadow-color)]"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      disableAnimation
      shouldHideOnScroll
    >
      <NavbarBrand className={zeyada.className}>
        <AppLink href="/" className="gap-4">
          <p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 dark:from-red-950 to-[var(--foreground-color)] dark:via-30% dark:via-[var(--foreground-color)] dark:to-red-200">
            Anas El Mostafa
          </p>
        </AppLink>
      </NavbarBrand>

      <NavbarMenuToggle
        className="sm:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <AppLink href="/#home" matches={["/", ""]}>
            Home
          </AppLink>
        </NavbarItem>
        <NavbarItem>
          <AppLink href="/#bio">Bio</AppLink>
        </NavbarItem>
        <NavbarItem>
          <AppLink href="/#about">About</AppLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="py-6 gap-2">
        <NavbarMenuItem className="border-b-1 border-red-950 dark:border-red-50 w-full text-end">
          <AppLink href="/#home" matches={["/", ""]} onClick={closeMenu}>
            Home
          </AppLink>
        </NavbarMenuItem>
        <NavbarMenuItem className="border-b-1 border-red-950 dark:border-red-50 w-full text-end">
          <AppLink href="/#bio" onClick={closeMenu}>
            Bio
          </AppLink>
        </NavbarMenuItem>
        <NavbarMenuItem className="border-b-1 border-red-950 dark:border-red-50 w-full text-end">
          <AppLink href="/#about" onClick={closeMenu}>
            About
          </AppLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
