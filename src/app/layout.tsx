import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#5A171F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Fauzan — Software Engineer & Systems Monograph",
  description:
    "Monograph and selected engineering works of Muhammad Fauzan. Full-stack distributed architectures, real-time vehicle telemetry, and high-performance mobile systems.",
  authors: [{ name: "Muhammad Fauzan" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Muhammad Fauzan — Software Engineer",
    description: "Architectural software engineering and digital craftsmanship.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-maroon selection:text-milky-white">
        {children}
      </body>
    </html>
  );
}
