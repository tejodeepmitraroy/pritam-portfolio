import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Big_Shoulders_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeProvider } from "@/context/theme-context"




export const metadata: Metadata = {
  title: "Pritam Majumder - Portfolio",
  description: "Expert Video Editor Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
