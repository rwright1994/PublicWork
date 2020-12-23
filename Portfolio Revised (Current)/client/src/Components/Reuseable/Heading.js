import styles from './Heading.module.css';

const Heading = (props) => {
    return(
        <div className={styles.headingContainer}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <p className={styles.text}> {props.text}</p>
            <hr className={styles.hr}/>
        </div>
    )
}

export default Heading;