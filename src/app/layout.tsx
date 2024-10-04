import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export const metadata: Metadata = {
  title: "Site Mariana",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
