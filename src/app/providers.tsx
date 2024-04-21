"use client";

import { NextUIProvider } from "@nextui-org/react";
import { createContext, memo, useContext, useEffect, useLayoutEffect, useState } from "react";

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

const HashContext = createContext<string>("");
HashContext.Provider = memo(HashContext.Provider);
export function HashProvider({ children }: { children: React.ReactNode }) {
  const [hash, setHash] = useState<string>("");

  useLayoutEffect(() => {
    setHash(location.hash);
  }, []);

  useEffect(() => {
    const onHashChange = (e: HashChangeEvent) => {
      setHash(e.newURL);
    };

    addEventListener("hashchange", onHashChange, false);

    return () => {
      removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return <HashContext.Provider value={hash}>{children}</HashContext.Provider>;
}
export function useHash() {
  const hash = useContext(HashContext);
  if (hash === undefined)
    throw new Error("<HashProvider> must be an ancestor of any Component calling useHash()");

  return hash;
}
