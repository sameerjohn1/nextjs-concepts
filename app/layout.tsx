import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next-js-Conpects</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
