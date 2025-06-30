import { DiaryProvider } from './contexts/AppContext'
import './globals.css'
import ThemeProvider from './providers/ThemeProvider'

export const metadata = {
  title: 'Next.js + Ant Design',
  description: 'Next.js with Ant Design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DiaryProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </DiaryProvider>
      </body>
    </html>
  )
}