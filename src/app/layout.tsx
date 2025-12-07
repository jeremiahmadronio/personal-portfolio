import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
export const metadata: Metadata = {
  
  title: "Jeremiah Madronio — Backend Software Developer | Java Spring Boot & Python FastAPI",

  
  description:
    "Explore the official portfolio of Jeremiah Madronio, a Backend Software Engineer specializing in Spring Boot, AI-Powered web applications, and modern API development.",
  verification: {
    google: "OdvSQHV0lfmsLv_mZki80UcPvk9wkBKERHndlIv1tws",
  },

  
  keywords: [
    // Name Variants
    "Jeremiah Madronio",
    "Jere Madronio",
    "Jeremiah Jere Madronio",
    "Madronio Portfolio",
    "Jeremiah Portfolio",
    "Jere Portfolio",
    "Jere Backend Developer",
    "Jeremiah Developer",
    "Jere",
     "Jer",
      "Jerem",
       "Jeremi",
        "Jeremia",

    
    "About Jeremiah Madronio",
    "Jeremiah Madronio Projects",
    "Jeremiah Madronio Resume",
    "Jeremiah Madronio GitHub",
    "Jere Coding Portfolio",
    "Jere Dev Portfolio",

   
    "Software Engineer Philippines",
    "Backend Developer Philippines",
    "Java Developer Philippines",
    "STI Student Developer",
    "Full Stack Developer Philippines",

    
    "Backend Software Engineer",
    "Spring Boot Developer",
    "FastAPI Developer",
    "Java Backend Developer",
    "Python Backend Developer",
    "REST API Developer",
    "Microservices Engineer",
    "Next.js Developer",
    "Full Stack Engineer",

    // Tech Stack
    "Spring Boot",
    "FastAPI",
    "Java Developer",
    "Python Developer",
    "Next.js",
    "React Developer",
    "PostgreSQL",
    "MySQL",
    "Vercel Developer",
    "GitHub Developer",

    // General Portfolio
    "Best developer portfolio",
    "Backend developer portfolio",
    "Software engineer portfolio",
    "Programming portfolio website",
  ],

  // — AUTHOR
  authors: [{ name: "Jeremiah Madronio", url: "https://jeremiah-madronio.vercel.app" }],
  creator: "Jeremiah Madronio",
  publisher: "Jeremiah Madronio",


  icons: {
    icon: [{ url: "/images/a.jpg", sizes: "any", type: "image/jpeg" }],
    apple: [{ url: "/images/a.jpg", sizes: "any", type: "image/jpeg" }],
  },

 
  openGraph: {
    title: "Jeremiah Madronio — Backend Software Developer | Java Spring Boot & Python FastAPI",
    description:
      "Explore the official portfolio of Jeremiah Madronio, a Backend Software Engineer specializing in Spring Boot, AI-Powered web applications, and modern API development.",
    url: "https://jeremiah-madronio.vercel.app",
    siteName: "Jeremiah Madronio Portfolio",
    images: [
      {
        url: "/images/a.jpg",
        width: 600,
        height: 600,
        alt: "Portrait of Jeremiah Jere Madronio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}
