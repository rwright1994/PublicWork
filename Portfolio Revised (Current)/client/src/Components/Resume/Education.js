import styles from './Education.module.css';

const Education = (props) => {

    const list = props.knowledgeList.map( (knowledge,index) => 
        <li key={index}> 
            {knowledge}
        </li>
        )


    return(
        <div className={styles.contentContainer}>
        <h2 className={styles.timeStamp}>2012 &mdash; 2016</h2>
        <div className={styles.content}>
            <h3>{props.name}</h3>
            <h5>{props.degreeLevel} &mdash; {props.fieldOfStudy}</h5>
            <ul>
            {list}
            </ul>
      </div>
    </div>
    )
}

export default Education;