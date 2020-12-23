import styles from './Certification.module.css';

const Certification = (props) => {

    return(
        <div className={styles.contentContainer}>
            <div className={styles.certImg}>
                <img id={styles.certImg}src={props.certImg} aria-labelledby="PMI Logo"/>
            </div>
            <div className={styles.content}>
                <h3 id="capm-label">{props.certName}</h3>
                <h3>{props.certFrom} - {props.certTo}</h3>
            </div>
        </div>
        )
}

export default Certification;