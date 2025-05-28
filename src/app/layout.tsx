import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Big_Shoulders_Display, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/context/theme-context"

const bigShoulder = Big_Shoulders_Display({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Miller - Portfolio",
  description: "Senior Product Designer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bigShoulder.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
