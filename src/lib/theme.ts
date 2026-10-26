export type Theme = "light" | "dark";

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function setTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  document.dispatchEvent(
    new CustomEvent<{ theme: Theme }>("themechange", { detail: { theme } }),
  );
}

export function toggleTheme(): Theme {
  const theme = getTheme() === "dark" ? "light" : "dark";
  setTheme(theme);
  return theme;
}
