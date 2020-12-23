import styles from './StyledCard.module.css';

import {FaCheck} from 'react-icons/fa';

const StyledCard = (props) => {



    const points = props.points.map( (point,index) => <li><FaCheck key={index} color="#e67e22" size={14}/>{point}</li>)

    return (
        <div className={styles.cardContainer}>
           <h3 className={styles.cardHeading}>{props.heading}</h3>
           <figure className={`${styles.cardIcon} ${props.heading === "React" ? styles.reactLogo:""}`}>{props.techIcon}</figure>
           <ul className={styles.points}>
              {points}
           </ul>
            
        </div>
    )
}

export default StyledCard; 