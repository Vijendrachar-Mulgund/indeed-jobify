import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/main/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobify",
  description: "Find Jobs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="forest" lang="en">
      <body className={montserrat.className}>
        <Header />
        <section className="mx-auto w-full max-w-[100rem]">{children}</section>
      </body>
    </html>
  );
}
