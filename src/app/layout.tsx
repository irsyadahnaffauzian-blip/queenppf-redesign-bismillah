import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import global components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QueenWrap PPF",
  description: "Layanan premium Paint Protection Film & Car Wrapping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* NAVBAR DI SEMUA PAGE */}
        <Navbar />

        {/* CONTENT PAGE */}
        {children}

        {/* FOOTER DI SEMUA PAGE */}
        <Footer />
      </body>
    </html>
  );
}
