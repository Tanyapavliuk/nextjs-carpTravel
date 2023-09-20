import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'UNCOVER CARPATHIANS SECRETS Unforgettable trips to the most beautiful parts of the Carpathians. Hoverla, Yaremche, Zakarpattia, Vorokhta, Synevyr Lake, Bukovel. ',
  openGraph: {
    title: 'CarpTravel',
    description: 'Unforgettable trips to the most beautiful parts of the Carpathians. Hoverla, Yaremche, Zakarpattia, Vorokhta, Synevyr Lake, Bukovel.',
    url: 'https://nextjs-carp-travel-nine.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://nextjs-carp-travel-nine.vercel.app/_next/static/media/slide1.d8ea3d0d.jpg',
        width: 800,
        height: 600,
        alt: 'Unreal beauty of the Ukrainian Carpathians',
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
