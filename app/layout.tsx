import '@/styles/globals.css'
import '@/styles/dialogs.scss'
import '@/styles/buttons.scss'
import { Inter } from 'next/font/google'
import Navigator from '@/components/navigator/Navigator'
import GlobalProviders from '@/context/globalProviders'
import Tooltip from '@/components/shared/tooltip/Tooltip'

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
        <GlobalProviders>
          <Navigator />
          {children}
          <Tooltip />
        </GlobalProviders>
      </body>
    </html>
  )
}
