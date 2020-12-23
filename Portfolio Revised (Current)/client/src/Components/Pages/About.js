//Component Imports
import Heading from '../Reuseable/Heading';
import RightImagePair from '../Reuseable/RightImagePair';
import LeftImagePair from '../Reuseable/LeftImagePair';
import image from '../../Resources/Images/Photo-A.jpg'
import ImageGallery from '../Reuseable/ImageGallery';
import StyledCard from '../Reuseable/StyledCard';
import SocialLink from '../Reuseable/SocialLink';


//React Icon imports
import {FaFacebook, FaLinkedin, FaReact} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di';
import {FaAngleDoubleRight} from 'react-icons/fa';

//Social Icons
import {FaGithub} from 'react-icons/fa';

//CSS Modules Import
import styles from './About.module.css';


//Image Imports 
import GalleryImgA from '../../Resources/Images/Photo-B.jpg';
import GalleryImgB from '../../Resources/Images/Photo-E.jpg';
import GalleryImgC from '../../Resources/Images/Photo-C.jpg';

import GalleryImgD from '../../Resources/Images/SkittlesUnderBlanket.jpg';
import GalleryImgE from '../../Resources/Images/SkittlesInSuitcase.jpg';
import GalleryImgF from '../../Resources/Images/Computer.jpg';




const About = () => {

    const imageList = [
        {src:GalleryImgA, altText:"Capilano Suspension Tree Top Bridges"},
        {src: GalleryImgE, altText:"Skittles sitting inside my partners suitcase while packing up for the move."},
       
        {src: GalleryImgC, altText:"River Under Capilano Suspension Bridge"}
    ];

    const imageList2 =[
        {src: GalleryImgD, altText:"Skittles hiding underneath the blankets with just his face poking out."},
        {src:GalleryImgB, altText:"Mountain view of orchards in Kelowna"},
        {src: GalleryImgF, altText:"Thermaltake Level 20 HT Custom build computer with custom liquid cooling loop."}
    ]

    return (
        <div>
            <Heading 
            heading="A few fun facts about me"
            text="And a good chance to get to know something about me"/>
            <section>
                <LeftImagePair
                img={image}
                altText="Photo of Gym Equipment"
                heading="Where I'm from and What I do"
                text="I am reside Lake Country BC, and I love it! I recently moved with my partner from New Brunswick so she can pursue our careers. I have 3 year old dog Skittles and he is the most energitic ball of fur, I like to collect video games and I love to play guitar when I get a chance."
                />
            </section>

            <section>
                <ImageGallery images={imageList}/>
                <ImageGallery images={imageList2}/>
            </section>

            <section>
                <RightImagePair 
                img={image}
                altText="Another Image"
                heading="another heading for important info"
                text="Here is some text explaining something about what the heading says."
                />
            </section>

            <section className={styles.aboutTechnologies}>
                <h1 className={styles.stackHeading}>The Stack</h1>
                <div className={styles.stackContainer}>
                    <StyledCard
                    heading="MongoDB"
                    iconBackgroundColor="#6b6b6b"
                    techIcon={<DiMongodb color="#06963b" size={80} stroke="black" strokeWidth=".3"/>}
                    points={["Fast","Scalable", "Json","NoSQL"]}/>   
                    <StyledCard
                    heading="Express"
                    techIcon={<FaAngleDoubleRight color="#808080" size={80} stroke="black" strokeWidth=".3"/>}  points={["Fast","Scalable", "Robust API", "Asynchronous and Single-threaded"]}
                    />  
                    <StyledCard 
                    heading="React"
                    techIcon={<FaReact color="#21f8ff" size={80} stroke="black" strokeWidth="1"/>}
                    points={["Fast","Easy to Maintain", "Reusable Components", "Popular Framework"]}
                    />  
                    
                    <StyledCard
                    heading="NodeJs"
                    techIcon={<FaNodeJs color="#0ee35c" size={80} stroke="black" strokeWidth="1"/>}
                    points={["Fast","Scalable", "npm (Node Package Manager)", "Asynchronous and Single-threaded"]}
                    />    
                </div>
            </section>
            <section className={styles.aboutSocialMedia}>
                <SocialLink 
                socialName="Github" 
                socialLink="https://www.github.com/rwright1994/PublicWork"
                socialIcon={<FaGithub size={60}/>} 
                socialColor="black"
                />
                <SocialLink 
                socialName="LinkedIn"
                socialLink="https://www.linkedin.com/"
                socialIcon={<FaLinkedin size={60}/>}
                socialColor="#007bb6"
                />
                <SocialLink
                socialName="Facebook"
                socialLink="https://www.facebook.com"
                socialIcon={<FaFacebook size={60}/>}
                socialColor="#3b5998"
                />
            </section>
        </div>
    )
}

export default About;