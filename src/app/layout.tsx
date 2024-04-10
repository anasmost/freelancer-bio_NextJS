import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { inter } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";

export { initialMetadata as metadata } from "./metadata";

export const revalidate: number | false = Math.ceil(
  new Date(1 + new Date().getFullYear(), 0).valueOf() / 1000 - Date.now() / 1000
);

export const dynamic: "force-static" | "auto" | "force-dynamic" | "error" | undefined =
  "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <div className="max-w-screen-xl m-auto p-4 sm:p-unit-xl flex flex-col gap-4">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
