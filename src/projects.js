
import images from "./constants/images"


const spec = '#Design, #UX, #React'

const magicbrainSpec = '#Design, #UX/UI, #React, #PostgreSQL, #Express'
const obodinacSpec = '#Design, #UX/UI, #React, #Figma'

const narutoDesc = 'Front page design of Naruto website. This design contains information of Naruto, his best friend, his teachers and his enemies.'
const gamboriniDesc = 'Front page desing of Gamborini restaurant. This design contains everything one restaurant website needs to have.'
const magicbrainDesc = 'My first app. This application includes the ability to create a profile and choose whether to detect faces or logos from an image uploaded via URL.'
const obodinacDesc = "Website of my family business. In addition to the main page, the website will include pages such as About Us, Our Offer, Gallery, Additional Offer, and Contact. All designs on the website were created in Figma.The website is currently in the development process."
const velimirPortfolioDesc = "My first paid project. UI/UX and logo designer's portfolio. This portfolio contains everything you need to know about designer and his work experience."

const projects = [
    {
        img:images.narutoPage,
        title:'Naruto Web Page',
        description: narutoDesc,
        specification:spec,
        link:'https://naruto-o79e.onrender.com/'
    },
    {
        img:images.magicBrainPage,
        title:'Magic Brain App',
        description: magicbrainDesc,
        specification:magicbrainSpec,
        link:'https://magicbrain-fak2.onrender.com'
    },
    {
        img:images.gamboriniPage,
        title:'Gamborini Restaurant',
        description: gamboriniDesc,
        specification:spec,
        link:'https://gamborini.onrender.com'
    },
    {
        img:images.obodinacPage,
        title:'Obodinac Web Page',
        description: obodinacDesc,
        specification:obodinacSpec,
    },
    {
        img:images.velimirPorfolioPage,
        title:"Velimir's Portfolio",
        description: velimirPortfolioDesc,
        specification:obodinacSpec,
        link:'https://velimir-portfolio.onrender.com/'
    }
]

export default projects