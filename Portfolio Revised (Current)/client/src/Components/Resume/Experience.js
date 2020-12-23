import styles from './Experience.module.css';

const Experience = (props) => {

    const dutiesList = props.jobDuties.map( (el,index) => 
        <li key={index}>{el}</li>)

    return(               
    <div className={styles.contentContainer}>
        <h2 className={styles.timeStamp}>{props.timeStamp}</h2>
        <div className={styles.content}>
            <h3>{props.positionTitle}</h3>
            <h5>{props.employer}</h5>
            <ul>
                {dutiesList}
            </ul>
        </div>
    </div>)
}

export default Experience;