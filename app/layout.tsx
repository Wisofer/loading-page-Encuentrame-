import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Encuentrame",
  description: "La App que conecta trabajadores, profesionales, empleadores y comunidades locales.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/assets/images/logoremove.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/images/logoremove.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/assets/images/logoremove.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
