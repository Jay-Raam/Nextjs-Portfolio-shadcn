import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Navbar from "@/components/navbar";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayasriraam - I'm your friend",
  description: "In this site describe my Informations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
