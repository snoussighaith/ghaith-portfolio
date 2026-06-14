import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghaith Snoussi | Data Science & Full Stack Developer",
  description:
    "Portfolio of Ghaith Snoussi, a Data Science Master's student focused on AI, IoT, Big Data, and modern web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-[#f5efe6] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
