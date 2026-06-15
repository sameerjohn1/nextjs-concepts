import type { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next-js-Concepts</title>
      </head>

      <body>
        {/* Navbar */}
        <nav
          style={{
            padding: "15px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
