import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem("glow-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    window.localStorage.setItem("glow-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return [isDark, setIsDark];
}
