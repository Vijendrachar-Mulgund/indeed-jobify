import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/modules/header";
import { ReduxProvider } from "@/redux/provider";
import { ThemeProvider } from "@/components/modules/theme-provider";

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
      <body className={`${montserrat.className} relative`}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />
            <section className="mx-auto w-full max-w-[100rem]">
              {children}
            </section>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
