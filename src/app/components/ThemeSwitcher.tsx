"use client";

import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "@/app/icons";

import styles from "./ThemeSwitcher.module.css";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [size, setSize] = useState<"md" | "lg" | undefined>();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const size: "md" | "lg" = (matchMedia("(min-width: 768px)").matches && "lg") || "md";
    setSize(size);
  }, []);

  if (!size) return null;

  return (
    <Switch
      isSelected={resolvedTheme === "dark"}
      size={size}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
      onValueChange={(isSelected: boolean) => setTheme(isSelected ? "dark" : "light")}
      className={`${styles.switch} fixed z-50 ${
        size === "lg" ? "bottom-4 right-4" : "bottom-3 right-2"
      }`}
    />
  );
}
