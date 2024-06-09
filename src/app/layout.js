import { Aleo } from 'next/font/google'
import "./globals.css";
import Header from './components/Header';
import Head from 'next/head';

const aleo = Aleo({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  preload: false
})


const metadata = {
  title: "Andrey's CV",
  description: `Explore my comprehensive collection of work, skills, and knowledge. Here, you'll find detailed information about my expertise in front-end development, my work experience, and more. If you have any questions, you can even ask an AI for assistance.

  Take a look around to see examples of my projects and how my front-end skills can bring your ideas to life. Whether you're interested in web development, chatbot integration, or database solutions, I'm here to help.
  
  Let's connect and discuss how I can contribute to your next project.`,
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
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='400' />
        <meta property='og:image:type' content='image/jng' />
        <meta property="og:type" content="website" />
        <Header/>
          {children}
      </body>
    </html>
  );
}