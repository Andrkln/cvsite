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


const metadata = {
  title: "Andrey's CV",
  description: "Here you can find all info about me or ask AI about it",
  content: "width=device-width, initial-scale=1.0",
  image: "/images/my_photo.jpg"
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.content} />
       </Head>
      <body className={aleo.className}>
        <meta property='og:description' content={metadata.description}/>
        <meta property='og:title' content={metadata.title} />
        <meta property='og:image' content={metadata.image} />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='600' />
        <meta property='og:image:type' content='image/jng' />
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}