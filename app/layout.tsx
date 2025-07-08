import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MediaHeader from "@/components/MediaHeader"

export const metadata: Metadata = {
  title: "Parth — Full-Stack Developer and Web Designer",
  description: "I craft responsive websites where technologies meet creativity",
  keywords: "web developer, full-stack developer, React, Next.js, TypeScript",
  authors: [{ name: "Parth" }],
  openGraph: {
    title: "Parth — Full-Stack Developer and Web Designer",
    description: "I craft responsive websites where technologies meet creativity",
    type: "website",
    locale: "en",
    siteName: "Parth Portfolio",
    images: ["/images/meta/banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#C778DD",
  icons: {
    icon: [
      { url: "/images/meta/favicon.svg", type: "image/svg+xml" },
      { url: "/images/meta/favicon.png", type: "image/png" },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <MediaHeader />
          <Header />
          <main className="container content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
