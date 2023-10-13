import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../utils/AntdRegistry'
import CombinedContextProvider from '../context/CombinedContextProvider'
import Main from '../components/Main'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'sonner'
export const metadata = {
  title: 'Tasks APP',
  description: 'Tasks APP DEMO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <CombinedContextProvider>
          <StyledComponentsRegistry>
            <Main>
              {children}
            </Main>
          </StyledComponentsRegistry>
        </CombinedContextProvider>
      </body>
    </html>
  )
}
