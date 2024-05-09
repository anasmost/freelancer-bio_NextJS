import React from "react";
import "@/globals.css";
import * as fonts from "../fonts";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { GlobalProviders, HashProvider } from "../providers";

export { initialMetadata as metadata } from "../metadata";

export const revalidate: number | false = Math.ceil(
  new Date(1 + new Date().getFullYear(), 0).valueOf() / 1000 - Date.now() / 1000
);

export const dynamic: "force-static" | "auto" | "force-dynamic" | "error" | undefined =
  "force-static";

export default function RootLayout({
  children,
  home,
  bio,
  about,
}: Readonly<{
  children: React.ReactNode;
  home: React.ReactNode;
  bio: React.ReactNode;
  about: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.sen.className}>
        <GlobalProviders>
          <HashProvider>
            <NavBar />
          </HashProvider>
          <div className="max-w-screen-xl m-auto p-4 sm:p-7 flex flex-col gap-20 sm:gap-10 *:!h-auto">
            {children}
            {home}
            {bio}
            {about}
          </div>
          <Footer />
          <ThemeSwitcher />
        </GlobalProviders>
      </body>
    </html>
  );
}
