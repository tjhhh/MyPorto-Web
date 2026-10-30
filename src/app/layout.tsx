import type { Metadata, Viewport } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import { AmbientSpotlight } from "@/app/_components/motion";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
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
    icon: [
      { url: "/icon.svg?v=mf-cut-grotesk", type: "image/svg+xml" },
      {
        url: "/favicon.ico?v=mf-cut-grotesk",
        type: "image/x-icon",
        sizes: "16x16 32x32 48x48",
      },
    ],
    shortcut: "/favicon.ico?v=mf-cut-grotesk",
    apple: {
      url: "/apple-touch-icon.png?v=mf-cut-grotesk",
      type: "image/png",
      sizes: "180x180",
    },
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
      className={`${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-maroon selection:text-milky-white relative">
        <AmbientSpotlight />
        {children}
      </body>
    </html>
  );
}
