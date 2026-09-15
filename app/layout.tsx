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
  title: "Ghaith Snoussi | Data Science Master's Student | AI & Full Stack Developer",
  description:
    "Portfolio of Ghaith Snoussi, a Data Science Master's student focused on AI, IoT, Big Data, and modern web experiences.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { const saved = localStorage.getItem("theme"); const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.classList.toggle("dark", dark); })();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#f5efe6] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
