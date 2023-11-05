import images from "./constants/images";

const spec = "#Design, #UX, #React.ts, #Vite, #PokeAPI, #Figma";

const magicbrainSpec = "#Design, #UX/UI, #React, #ClarifyAPI";
const obodinacSpec = "#Design, #UX/UI, #React, #Figma";

const pokemonDesc =
  'App that uses PokeAPI for displaying pokemons. You can choose how many pokemons you want to see at the time. Also you can choose to see "shiny" version of a pokemon. This app also supports "dark-mode".';
const magicbrainDesc =
  "My first app. This application includes the ability to choose whether to detect faces or logos from an image uploaded via URL.";
const obodinacDesc =
  "Website of my family business. In addition to the main page, the website will include pages such as About Us, Our Offer, Gallery, Additional Offer, and Contact. All designs on the website were created in Figma.";
const velimirPortfolioDesc =
  "My first paid project. UI/UX and logo designer's portfolio. This portfolio contains everything you need to know about designer and his work experience.";

const projects = [
  {
    img: images.magicBrainPage,
    title: "Magic Brain App",
    description: magicbrainDesc,
    specification: magicbrainSpec,
    link: "https://magicbrain-fak2.onrender.com",
  },
  {
    img: images.pokemonPage,
    title: "PokeDex",
    description: pokemonDesc,
    specification: spec,
    link: "https://pokedex-oq5h.onrender.com/",
  },
  {
    img: images.obodinacPage,
    title: "Obodinac Web Page",
    description: obodinacDesc,
    specification: obodinacSpec,
    link: "https://obodinac.onrender.com/",
  },
  {
    img: images.velimirPorfolioPage,
    title: "Velimir's Portfolio",
    description: velimirPortfolioDesc,
    specification: obodinacSpec,
    link: "https://velimir-portfolio.onrender.com/",
  },
];

export default projects;
