import styles from './ImagePair.module.css';

const LeftImagePair = (props) => {
    return(
        <div className={styles.container}>
                    <img className={styles.img} src={props.img} alt={props.altText}/>
                    <div className={styles.textContainer}>
                        <h1 className={styles.heading}>{props.heading}</h1>
                        <p className={styles.text}>{props.text}</p>
                    </div>
        </div>

    )
}

export default LeftImagePair;