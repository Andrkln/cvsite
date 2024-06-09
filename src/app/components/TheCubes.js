`use client`
import Cube from "./Cube";
import useismobile from "../hooks/isMobile";


let img1 = "/images/kz.png";
let img2 = "/images/Bootstrap_logo.png";
let img3 = "/images/AWS.jpg";
let img4 = "/images/Race.png";
let img5 = "/images/CSS.webp";
let img6 = "/images/postgres.png";
let img7 = "/images/openai.png";
let img8 = "/images/weather.webp";
let img9 = "/images/pshed.webp";
let img10 = "/images/datasimple.webp";
let img11 = "/images/pgroup.webp";
let img12 = "/images/smartt.webp";
let img13 = "/images/mtasks.webp";
let img14 = "/images/design.webp";
let img15 = "/images/onepage.webp";
let img16 = "/images/modern.webp";
let img17 = "/images/small.webp";
let img18 = "/images/webm.webp";
let img19 = "/images/user.webp";
let img20 = "/images/bot.webp";
let img21 = "/images/talk.webp";
let img22 = "/images/buttons.webp";
let img23 = "/images/instant.webp";
let img24 = "/images/discount.webp";
let img25 = "/images/pythonreact.webp";
let img26 = "/images/aibot.webp";
let img27 = "/images/textc.webp";
let img28 = "/images/3Dimg.webp";
let img29 = "/images/typeeffect.webp";





export const Cube1 = () => {
const ismobile = useismobile();
  const width = ismobile ? `30ch` : `30ch`;
  const z = ismobile ? `15ch` : `15ch`;
    const cubeFaces = [
      { color: `green`, width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`, 
      text: `kuzet-standart.kz was my 1st real project`,
      TypeText:`Built on Django is really scalable`,
      imageUrl: img1,
      textColour: `linear-gradient(90deg, rgba(93,0,78,1) 0%, rgba(225,255,39,1) 29%, rgba(0,255,244,1) 100%)`, 
      speed: 45 },
      { color: `rgb(74, 1, 245)`, width: width, height: width, font: `16px`, transform: `rotateY(180deg) translateZ(${z})`,
      text: `Used bootstrap and crsipyforms for convenient form management`, 
      TypeText:`And great visual effect`,
      imageUrl: img2,
      textColour: `linear-gradient(90deg, rgba(0,255,192,1) 0%, rgba(255,255,255,1) 51%, rgba(241,255,0,1) 100%)`, 
      speed: 100 },
      { color: `orange`, width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
      text: `AWS for image storing`, 
      TypeText:`Images have own database`,
      imageUrl: img3,
      textColour: `linear-gradient(90deg, rgba(77,77,77,1) 0%, rgba(255,255,255,1) 51%, rgba(65,255,0,1) 100%)`, 
      speed: 90 },
      { color: `rgb(81, 196, 148)`, width: width, height: width, font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
      text: `Moving animation`, 
      TypeText:`Looks like police lights`,
      imageUrl: img4,
      textColour: `linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(39,163,255,1) 51%, rgba(0,18,255,1) 100%)`, 
      speed: 60},
      { color: `blue`, width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
      text: `Only one css file`, 
      TypeText:`Styling all project`,
      imageUrl: img5,
      textColour: `rgb(245, 1, 245)`, 
      speed: 100 },
      { color: `orange`, width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
    ];
  
    return <Cube faces={cubeFaces} />;
  };


export const Cube2 = () => {
const ismobile = useismobile();
const width = ismobile ? `30ch` : `30ch`;
const z = ismobile ? `15ch` : `15ch`;
const cubeFaces = [
    { color: `lightblue`,width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`,
    text: `A telegram bot, my personal helper`, 
    TypeText:`Has Postgres SQL database`,
    imageUrl: img6,
    textColour: `rgb(245, 1, 245)`, 
    speed: 70 },
    { color: `gray`,width: width, height: width, font: `16px`, transform: `rotateY(180deg) translateZ(${z})`, 
    text: `OpenAI integration`, 
    TypeText:`Talk with ChatGPT and generate pictures`,
    imageUrl: img7,
    textColour: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 51%, rgba(0,189,98,1) 100%)`,  
    speed: 40 },
    { color: `yellow`,width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
    text: `Weather service API`, 
    TypeText:`Get any weather data in Telegram`,
    imageUrl: img8,
    textColour: `linear-gradient(90deg, rgba(59,59,59,1) 0%, rgba(144,119,237,1) 51%, rgba(255,0,0,1) 100%)`,  
    speed: 50 },
    { color: `rgb(45, 136, 255)`,width: width, height: width, font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
    text: `2 python shedule libraries`, 
    TypeText:`Manage any type of event` ,
    imageUrl: img9,
    textColour: `rgb(230, 241, 63)`,  
    speed: 50},
    { color: `violet`,width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
    text: `Data presented`, 
    TypeText:`In a simple way`,
    imageUrl: img10,
    textColour: `rgb(2, 146, 62)`, 
    speed: 50 },
    { color: `orange`,width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
];

return <Cube faces={cubeFaces} />;
};

export const Cube3 = () => {
const ismobile = useismobile();
const width = ismobile ? `30ch` : `30ch`;
const z = ismobile ? `15ch` : `15ch`;
const cubeFaces = [
    { color: `rgb(21, 129, 66)`,width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`,
    text: `Google sheets as a database`, 
    TypeText:`Manages data easily`,
    imageUrl: img10,
    textColour: `rgb(252, 237, 172)`, 
    speed: 50 },
    { color: `rgb(45, 136, 255)`,width: width, height: width, font: `16px`, transform: `rotateY(180deg) translateZ(${z})`, 
    text: `Different communication mods`, 
    TypeText:`Personal and Group`,
    imageUrl: img11,
    textColour: `rgb(0, 23, 124)`, 
    speed: 50 },
    { color: `rgb(42, 111, 201)`,width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
    text: `Messages filter`, 
    TypeText:`Smart adding of tasks`,
    imageUrl: img12,
    textColour: `rgb(0, 23, 124)`, 
    speed: 50 },
    { color: `rgb(39, 194, 255)`,width: width, height: width, font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
    text: `Fast tasks management`, 
    TypeText:`Add or Delete within seconds` ,
    imageUrl: img13,
    textColour: `black`,  
    speed: 50},
    { color: `rgb(189, 189, 189)`,width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
    text: `A great design`, 
    TypeText:`Even a messenger bot can look differently`,
    imageUrl: img14,
    textColour: `black`, 
    speed: 45 },
    { color: `orange`,width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
];

return <Cube faces={cubeFaces} />;
};

export const Cube4 = () => {
const ismobile = useismobile();
const width = ismobile ? `30ch` : `30ch`;
const z = ismobile ? `15ch` : `15ch`;
const cubeFaces = [
    { color: `lightblue`,width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`,
    text: `Made many simple one page websites`, 
    TypeText:`with unique visuals`,
    imageUrl: img15,
    textColour: `black`,  
    speed: 50 },
    { color: `red`,width: width, height: width, font: `16px`, transform: `rotateY(180deg) translateZ(${z})`, 
    text: `Page for kuzetkorgau`, 
    TypeText:`Modern design for old website`,
    imageUrl: img16,
    textColour: `yellow`,  
    speed: 50 },
    { color: `green`,width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
    text: `Small studying projects`, 
    TypeText:`Mousetracker, calculator etc`,
    imageUrl: img17,
    textColour: `white`, 
    speed: 50 },
    { color: `purple`,width: width, height: width, font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
    text: `Yandex and Google marketing`, 
    TypeText:`SEO, SEM...` ,
    imageUrl: img18,
    textColour: `rgb(31, 109, 255)`, 
    speed: 50},
    { color: `rgb(0, 153, 255)`,width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
    text: `Worked with many types of users data`, 
    TypeText:`Surveys, time on website etc.`,
    imageUrl: img19,
    textColour: `rgb(255, 66, 214)`, 
    speed: 50 },
    { color: `orange`,width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
];

return <Cube faces={cubeFaces} />;
};

export const Cube5 = () => {
const ismobile = useismobile();
const width = ismobile ? `30ch` : `30ch`;
const z = ismobile ? `15ch` : `15ch`;
const cubeFaces = [
    { color: `rgb(0, 153, 255)`,width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`,
    text: `Telegram bot for customers`, 
    TypeText:`Shows real time balance`,
    imageUrl: img20,
    textColour: `rgb(11, 13, 121)`, 
    speed: 50 },
    { color: `pink`,width: width, height: width, font: `16px`, transform: `rotateY(180deg) translateZ(${z})`, 
    text: `Communicate with any department of the company`, 
    TypeText:`Within one simple chat`,
    imageUrl: img21,
    textColour: `rgb(255, 66, 214)`, 
    speed: 50 },
    { color: `rgb(121, 11, 11)`,width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
    text: `All the discounts`, 
    TypeText:`that compay offers now`,
    imageUrl: img24,
    textColour: `rgb(255, 66, 214)`,  
    speed: 50 },
    { color: `rgb(89, 0, 255)`,width: width, height: width, font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
    text: `Styled buttons`, 
    TypeText:`Make the bot easily recognizable`,
    imageUrl: img22,
    textColour: `pink`, 
    speed: 50},
    { color: `violet`,width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
    text: `Custoemr can uppdates of his property`, 
    TypeText:`In real time anywhere`,
    imageUrl: img23,
    textColour: `red`,
    speed: 50 },
    { color: `orange`,width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
];

return <Cube faces={cubeFaces} />;
};

export const Cube6 = () => {
const ismobile = useismobile();
const width = ismobile ? `30ch` : `30ch`;
const z = ismobile ? `15ch` : `15ch`;
const cubeFaces = [
    { color: `rgb(166, 255, 0)`,width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`,
    text: `This website developed with Next.js and Python`, 
    TypeText:`Next.js + Django rest`,
    imageUrl: img25,
    textColour: `green`,
    speed: 50 },
    { color: `rgb(211, 211, 211)`,width: width, height: width, font: `16px`, transform: `rotateY(180deg) translateZ(${z})`, 
    text: `A samrt chat bot will answer any questions`, 
    TypeText:`About me or my projects`,
    imageUrl: img26,
    textColour: `black`, 
    speed: 50 },
    { color: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,14,215,1) 35%, rgba(0,212,255,1) 100%)`,width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
    text: `Special styled text`, 
    TypeText:`Looks better and more memorable`,
    imageUrl: img27,
    textColour: `pink`,  
    speed: 50 },
    { color: `blue`,width: width, height: width, font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
    text: `This website has`, 
    TypeText:`Complex 3D animations`,
    imageUrl: img28,
    textColour: `grey`,   
    speed: 50},
    { color: ` #8181b6`,width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
    text: `Type effect makes`, 
    TypeText:`Text more dynamic and interactive`,
    imageUrl: img29,
    textColour: `white`,
    speed: 50 },
    { color: `orange`,width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
];

return <Cube faces={cubeFaces} />;
};