import styles from './SkillColumn.module.css';

const SkillColumn = (props) => {

        const skillList = props.skills.map((el,index) => 
            <li key={index}>{el}</li>)
   
    return(
        <div className={styles.skillColumn}>
            <ul>
                {skillList}    
            </ul>

        </div>
    )
}

export default SkillColumn;