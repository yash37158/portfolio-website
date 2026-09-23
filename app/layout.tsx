import type { Metadata } from "next";
import { Poppins, Lobster_Two } from "next/font/google";
import { profile } from "@/content";
import "./globals.css";

const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const script = Lobster_Two({ subsets: ["latin"], weight: ["700"], style: ["italic"], variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  title: profile.name,
  description: `${profile.name} — ${profile.title}. Experience, projects and open source work.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
