import Nav from "@/components/Nav";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const tacticSans = localFont({
  variable: "--font-tactic-sans",
  src: [
    {
      path: "../../public/assets/fonts/tactic-sans-medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const volkSansTest = localFont({
  variable: "--font-volk-sans-test",
  src: [
    {
      path: "../../public/assets/fonts/volksansTest-Normal.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Leagues | Test task",
  description: "This is a test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(tacticSans.variable, volkSansTest.variable)}
    >
      <body>
        <main className="bg-bg-secondary">
          {children}

          <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100]">
            <Nav />
          </nav>
        </main>
      </body>
    </html>
  );
}
