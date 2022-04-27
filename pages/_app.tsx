import '/styles/globals.css'
import type { AppProps } from 'next/app'
import { CursorProvider } from '/hooks/useCursor'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>
  )
}
