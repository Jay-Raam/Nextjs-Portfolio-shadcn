import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Navbar from "@/components/navabr";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayasriraam - I'm your frined",
  description: "In this site describe my Informations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
