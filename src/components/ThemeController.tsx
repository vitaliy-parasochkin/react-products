import { useEffect, useState } from "react";

export default function ThemeController() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return <div>lol</div>;
}
