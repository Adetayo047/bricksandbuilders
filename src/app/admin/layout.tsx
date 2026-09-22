import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin | Bricks & Builders",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 font-sans text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
