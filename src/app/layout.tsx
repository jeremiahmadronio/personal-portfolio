import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeremiah Madronio | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, TypeScript, and Java Spring Boot. Building clean, scalable web applications.",
  keywords: ["Full Stack Developer", "React", "TypeScript", "Java", "Spring Boot", "Web Development"],
  authors: [{ name: "Jeremiah Madronio" }],
  openGraph: {
    title: "Jeremiah Madronio | Full Stack Developer",
    description: "Building clean, scalable web applications with modern technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
