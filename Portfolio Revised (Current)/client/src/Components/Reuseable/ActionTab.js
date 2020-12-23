import styles from './ActionTab.module.css';
import {Link} from 'react-router-dom';

const ActionTab = (props) => {

    return(
        <div className={styles.actionTab}>
            <h1 className={styles.actionHeading}>{props.heading}</h1>
            <p className={styles.actionDescription}>{props.description}</p>    
            <Link 
            className={props.color === "black"? styles.actionButtonBlack:styles.actionButton}
            to={props.link}>
                {props.btnText ? props.btnText : props.heading}
            </Link>
        </div>
    )
}

export default ActionTab;