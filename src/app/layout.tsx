import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Custom Cursor */}
          <CustomCursor /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
