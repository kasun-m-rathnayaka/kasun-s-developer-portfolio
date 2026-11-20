import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
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
// Not preloaded: it only appears in the footer, so it shouldn't compete with above-the-fold content.
const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  preload: false,
});

const { profile } = site;

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description: site.metaDescription,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: profile.name,
    description: site.metaDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: site.metaDescription,
  },
  // OG / Twitter images come from app/opengraph-image.tsx (and the per-project one).
};

export const viewport: Viewport = {
  // The site is dark by default, so match the browser chrome to it.
  themeColor: "#1a1818",
  colorScheme: "dark light",
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
        <Analytics />
      </body>
    </html>
  );
}
