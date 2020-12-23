import styles from './ImageGallery.module.css';

const ImageGallery = (props) => {

    const imageList = props.images.map((image,index) =>
    <li 
    className={styles.listItem} 
    key={index}>
        <img 
        className={styles.image} 
        src={image.src}
        alt={image.altText}/>
    </li>
    
    );

    return(
        <div>
            <ul className={styles.imageGallery}>
            {imageList}
            </ul>
        </div>
    )
}

export default ImageGallery;