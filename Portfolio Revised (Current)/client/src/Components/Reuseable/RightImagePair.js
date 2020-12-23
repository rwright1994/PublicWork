import styles from './ImagePair.module.css';

// Returns a function react component with an image on the right side of the parent div.
const LeftImagePair = (props) => {
    return(
        <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.heading}>{props.heading} </h1>
                        <p className={styles.text}>{props.text}</p>
                    </div>
                    <img className={styles.img} src={props.img} alt={props.altText}/>
        </div>
    )
}

export default LeftImagePair;