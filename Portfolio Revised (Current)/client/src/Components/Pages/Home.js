import styles from './Home.module.css'
import Heading from '../Reuseable/Heading';
import LeftImagePair from '../Reuseable/LeftImagePair';
import Banner from '../Reuseable/Banner';
import RightImagePair from '../Reuseable/RightImagePair';

//Import resources.
import IntroImg from '../../Resources/Images/Photo-D.jpg';
import RightImg from '../../Resources/Images/Photo-A.jpg';
import GalleryImgA from '../../Resources/Images/Photo-B.jpg';
import GalleryImgB from '../../Resources/Images/Photo-E.jpg';
import GalleryImgC from '../../Resources/Images/Photo-C.jpg';
import ImageGallery from '../Reuseable/ImageGallery';
import ActionTab from '../Reuseable/ActionTab';


const Home = () => {

    const imageList = [
        {src:GalleryImgA, altText:"Capilano Suspension Tree Top Bridges"},
        {src:GalleryImgB, altText:"Mountain view of orchards in Kelowna"},
        {src: GalleryImgC, altText:"River Under Capilano Suspension Bridge"}
    ];
   

    return(
        <div>
            <section id="main">
                <Heading 
                    heading="Strong Passion for Web Development!"
                    text="Everyone needs a website, but not everyone wants a boilerplate site."
                    />
                <LeftImagePair 
                    img={IntroImg} 
                    altText="Mountain view overlooking Wood Lake"
                    text="Web development can be expensive to build and maintain on a regular basis. And for some, websites aren't accessable. But you want to nurture your brand and reputation on social media. My passion is to help build a website that's affordable, easy to look at, maintain and navigate. Let me help build a custom design that you've always wanted." 
                    heading="Your Site, Your Brand"/>
                <Banner/>
              
                <RightImagePair 
                    img={RightImg} 
                    altText="Queen Elizabeth Park Rose Gardens"
                    heading="Avaliable Services"
                    text="Front-end Redesign, Bottom-up Front-end Design and Landing Pages. Please view the servies page for more details. No direct contact required. All communication done online or over the phone."/>
                <ImageGallery 
                images={imageList}/>
                <div className={`${styles.centered} ${styles.resumeActionLink}`}>
                    <ActionTab 
                    link="/resume"
                    heading="Resume"
                    description="Everyone wants to know what you are capable of and your experience. My resume is stright-forward with no exaggeration. Honesty is the foundation of trust. (Also lying is just bad.)"
                    color="black"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home;

