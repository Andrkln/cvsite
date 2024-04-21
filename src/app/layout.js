import { Aleo } from 'next/font/google'
import "./globals.css";
import Header from './components/Header';
import Head from 'next/head';
import Footer from './components/Footer';

const aleo = Aleo({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  preload: false
})

export const metadata = {
  title: "My CV",
  description: "Here you can find all info about me or ask AI about it",
  content: "width=device-width, initial-scale=1.0",
  image: "https://cvsite-pi.vercel.app/_next/image?url=%2Fimages%2Fmy_photo.jpg&w=256&q=75"
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.content} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </>
  );
}