import SkillColumn from './SkillColumn';
import styles from './SkillTable.module.css';

const SkillTable = (props) => {

    return(
        <div className={styles.skillTable}>
            <SkillColumn skills = {props.skillColumns[0].skills} />
            <SkillColumn skills = {props.skillColumns[1].skills} />
            <SkillColumn skills = {props.skillColumns[2].skills} />
        </div>
    )
}

export default SkillTable;
