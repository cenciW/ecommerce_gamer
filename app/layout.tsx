import type { Metadata } from "next";
import localFont from "next/font/local";
import {Montserrat} from "next/font/google";
import "./globals.css";

const font = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ecommerce Gamer",
  description: "Visão completa da loja de games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
