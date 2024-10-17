import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "jstatic.net",
  description: "serving static content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiase">
        {children}
      </body>
    </html>
  );
}
