import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Inter, Abel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abel",
});

export const metadata: Metadata = {
  title: "Product Search",
  description: "Search and explore our product catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${abel.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
