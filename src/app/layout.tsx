import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Jason Moynihan — Portfolio",
  description: "Clean, modern portfolio with glass UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="min-h-[100svh] overflow-x-hidden antialiased selection:bg-accent-500/20 selection:text-accent-600">
        {children}
      </body>
    </html>
  );
}
