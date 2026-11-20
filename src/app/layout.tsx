import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Script face used only for the footer signature "kasun".
const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.profile.url),
  title: site.profile.name,
  description: site.metaDescription,
  // Open Graph / Twitter / generated OG image: build step 6.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class before paint.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${script.variable}`}
    >
      <body className="min-h-dvh">
        <ThemeProvider>
          <Nav />
          <div className="mx-auto w-full max-w-xl p-4 sm:p-6">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
