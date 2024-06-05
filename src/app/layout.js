import { Aleo } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const aleo = Aleo({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  preload: false
});

export const metadata = {
  title: 'Learn the Cypher System with Rob',
  content: 'width=device-width, initial-scale=1.0'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.content} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="playercharacter.games" />
        <meta property="twitter:url" content="https://playercharacter.games/game-session-detail?id=66563029221ea06cb2068898" />
        <meta name="twitter:title" content="Learn the Cypher System with Rob" />
        <meta name="twitter:description" content="The Brink is a sprawling space opera setting that embraces the darkness of a looming cosmic conflict and the deep secrets of interstellar intrigue. The great expanse of the Milky Way is a rich galactic tapestry where the remnants of ancient civilizations intermingle with the cutting-edge advancements of the future. It's a place where opportunity and danger go hand in hand. Where powerful technologies and unique alien beings and abilities combine for fantastic star crossed adventures. Imagine mashing threads of the 'Guardians of the Galaxy's' vibrant eccentricity and 'Star Trek's' frontier exploration, all under the shadow of an impending galactic war. In this universe, a number of far reaching factions vie for power, resources, and knowledge; and the alliances between them are as fluid as the nebulae dotting the starry expanse. Worlds teeming with a myriad of sentient alien life orbit stars that have seen empires rise and fall, while space stations built from the husks of ancient vessels serve as hubs of commerce, crime, and conspiracy. The Brink's society is a melting pot of species and cultures. High-tech metropolises shine on the surfaces of small moons, their skylines a chaotic beauty of neon and hologram, juxtaposed with the rust of older structures and the skeletons of forgotten colonies and starships. Traders, mercenaries, adventurers, and outlaws all share the same star-lanes. In the shadow of this intricate civilization lies the ever-present threat of conflict. Players can explore the galaxy for ancient artifacts of untold power and influence the balance of power; or explore the frontiers of known space pushing the bounds of the known civilizations; uncovering new marvels and ancient alien wonders, both fraught with danger. 'The Brink' is a setting of contrasts, where the gleam of the future is inseparable from the echoes of the past, and every player discovery can either herald a new dawn for society or bring it to the precipice of annihilation." />
        <meta name="twitter:image" content="
https://pcgdragoncrestgames.s3.ca-central-1.amazonaws.com/game-header-images/f01850f2-d8b2-4a21-85c5-7cb361f698b2Tyranny-min.png" />
        <meta property="og:url" content="https://playercharacter.games/game-session-detail?id=66563029221ea06cb2068898" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Learn the Cypher System with Rob" />
        <meta property="og:description" content="The Brink is a sprawling space opera setting that embraces the darkness of a looming cosmic conflict and the deep secrets of interstellar intrigue. The great expanse of the Milky Way is a rich galactic tapestry where the remnants of ancient civilizations intermingle with the cutting-edge advancements of the future. It's a place where opportunity and danger go hand in hand. Where powerful technologies and unique alien beings and abilities combine for fantastic star crossed adventures. Imagine mashing threads of the 'Guardians of the Galaxy's' vibrant eccentricity and 'Star Trek's' frontier exploration, all under the shadow of an impending galactic war. In this universe, a number of far reaching factions vie for power, resources, and knowledge; and the alliances between them are as fluid as the nebulae dotting the starry expanse. Worlds teeming with a myriad of sentient alien life orbit stars that have seen empires rise and fall, while space stations built from the husks of ancient vessels serve as hubs of commerce, crime, and conspiracy. The Brink's society is a melting pot of species and cultures. High-tech metropolises shine on the surfaces of small moons, their skylines a chaotic beauty of neon and hologram, juxtaposed with the rust of older structures and the skeletons of forgotten colonies and starships. Traders, mercenaries, adventurers, and outlaws all share the same star-lanes. In the shadow of this intricate civilization lies the ever-present threat of conflict. Players can explore the galaxy for ancient artifacts of untold power and influence the balance of power; or explore the frontiers of known space pushing the bounds of the known civilizations; uncovering new marvels and ancient alien wonders, both fraught with danger. 'The Brink' is a setting of contrasts, where the gleam of the future is inseparable from the echoes of the past, and every player discovery can either herald a new dawn for society or bring it to the precipice of annihilation." />
        <meta property="og:image" content="
https://pcgdragoncrestgames.s3.ca-central-1.amazonaws.com/game-header-images/f01850f2-d8b2-4a21-85c5-7cb361f698b2Tyranny-min.png" />
      </head>
      <body className={aleo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
