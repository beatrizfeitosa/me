import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beatriz Feitosa",
  description: "QA Automation Analyst with 2+ years of experience building scalable test frameworks with Playwright, Robot Framework, and Selenium.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
