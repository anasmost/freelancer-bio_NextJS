import type { Metadata } from "next";

export const initialMetadata: Metadata = {
  metadataBase: new URL("https://anasmost-bio.vercel.app/"),
  title: "Anas Mostafa | Fullstack",
  description:
    "Web Profile of Anas Mostafa, a web technical consultant. I offer fullstack web development services. This web page is a small bridge to you, before venturing into a web agency.",
  authors: {
    name: "Anas El Mostafa",
    url: "https://anasmost-bio.vercel.app/",
  },
  keywords: [
    "Next.js",
    "Next",
    "React",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Anas El Mostafa",
    "Anas Mostafa",
    "Node.js",
    "Node",
    "SQL",
    "web",
    "development",
    "developer",
    "développeur",
    "developpeur",
    "développement",
    "developpement",
    "consultant",
    "technique",
    "css",
    "tailwind",
    "frontend",
    "backend",
    "fullstack",
    "website",
    "site web",
    "Casablanca",
    "Rabat",
    "Morocco",
    "Maroc",
  ],
  icons: {
    icon: [
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
      },
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "100x100",
      },
      {
        url: "/icons/apple-touch-icon.png",
        rel: "apple-touch-icon",
        sizes: "192x192",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        url: "/icons/favicon.ico",
        sizes: "16x16",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    url: "/",
    type: "website",
    title: "Anas Mostafa | Fullstack",
    description:
      "Web Profile of Anas Mostafa, a web technical consultant. I offer fullstack web development services. This web page is a small bridge to you, before venturing into a web agency.",
    emails: "anasel.consultant@gmail.com",
    images: [
      {
        url: "/icons/android-chrome-512x512.png",
        height: 512,
        width: 512,
      },
      {
        url: "/icons/android-chrome-192x192.png",
        height: 192,
        width: 192,
      },
      {
        url: "/icons/android-chrome-192x192.png",
        height: 100,
        width: 100,
      },
      {
        url: "/icons/apple-touch-icon.png",
        height: 192,
        width: 192,
      },
      {
        url: "/icons/favicon-16x16.png",
        height: 16,
        width: 16,
      },
      {
        url: "/icons/favicon-32x32.png",
        height: 32,
        width: 32,
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const bio: Metadata = {
  ...initialMetadata,
  title: "Anas | Bio",
  openGraph: {
    ...initialMetadata.openGraph,
    title: "Anas | Bio",
  },
};

export const about: Metadata = {
  ...initialMetadata,
  title: "Anas | About",
  openGraph: {
    ...initialMetadata.openGraph,
    title: "Anas | About",
  },
};
