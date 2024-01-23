import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

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
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <section className="max-w-[100rem] w-full mx-auto">{children}</section>
      </body>
    </html>
  );
}
