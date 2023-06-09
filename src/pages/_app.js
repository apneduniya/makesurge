import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/home.css';
import '@/styles/features.css';
import '@/styles/services.css';
import '@/styles/contact.css';
import '@/styles/footer.css';
import { Analytics } from '@vercel/analytics/react'
  ;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}