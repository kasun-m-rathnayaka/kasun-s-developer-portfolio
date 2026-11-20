import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <main className="pt-24 sm:pt-32">
        <p className="font-mono text-xs text-muted">404</p>
        <h1 className="mt-2 text-xl font-medium tracking-tight">This page doesn&apos;t exist.</h1>
        <p className="mt-2 leading-relaxed text-muted">
          The link may be old, or the address mistyped. Try the home page, or open the
          command palette from the nav to jump somewhere.
        </p>
        <Link
          href="/"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
