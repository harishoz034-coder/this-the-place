import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QuickBar from "@/components/common/QuickBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "This The Place! | Authentic Chinese, Oriental & Seafood • Madhapur, Hyderabad",
  description: "Experience delicious Chinese, Pan-Asian and Seafood dining at This The Place! Madhapur. Signature Dragon Chicken, Butter Garlic Prawns, Handcrafted Dimsums, Momos & Noodles.",
  keywords: "This The Place, This The Place Madhapur, Chinese Restaurant Madhapur, Pan Asian Food Hyderabad, Dimsums Hyderabad, Dragon Chicken Madhapur, Seafood Restaurant Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-alabaster-100 text-charcoal-900 antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <QuickBar />
      </body>
    </html>
  );
}
