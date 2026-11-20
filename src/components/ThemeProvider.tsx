"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Dark by default, light available; ignore the OS setting so first paint is
// always the designed dark theme. The `L` shortcut and toggle come in later steps.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
