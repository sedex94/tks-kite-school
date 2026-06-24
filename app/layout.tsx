import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const inter = Inter({ variable: '--font-body', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TKS Kite School | Escola de Kitesurf em Cabo Frio',
  description:
    'Aprenda kitesurf em Cabo Frio com a TKS Kite School. Aulas para iniciantes, intermediários e avançados, previsão de ventos em tempo real, vídeos e galeria.',
  generator: 'v0.app',
  icons: {
    icon: '/images/tks-logo.png',
    apple: '/images/tks-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1420',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
