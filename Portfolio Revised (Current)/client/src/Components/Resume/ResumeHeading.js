import styles from './ResumeHeading.module.css';


const ResumeHeading = (props) => {
    return(<div className={styles.resumeHeading}>
        <h2>{props.heading}</h2>
    </div>);
}

export default ResumeHeading;