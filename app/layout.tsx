import Navigator from '@/components/navigator/Nevigator'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sprint chat',
  description: 'Messaging web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigator />
        {children}
      </body>
    </html>
  )
}
