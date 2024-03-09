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
  description: "cv of Andrey Kalinichenko",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta charset="UTF-8"/>
          <meta name="viewport" content={metadata.content}/>
       </Head>
      <body className={aleo.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}