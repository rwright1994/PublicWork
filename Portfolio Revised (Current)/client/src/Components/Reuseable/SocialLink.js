import {useState} from 'react';
import styles from "./SocialLink.module.css";



const SocialLink = (props) => {

    const [isHovered, setIsHovered] = useState(false);


    const hoverHandler = (e) => {
      setIsHovered(!isHovered);
    }

   

    const mStyle = {
        color: props.socialColor,
        textDecoration: ""
    }


    let hoverStyle;
    if(isHovered){
        hoverStyle = {
            color: props.socialColor
        }
    }else{
        hoverStyle= {
            color: 'black'
        }
    }


    return(
        
        <div className={styles.socialContainer}>
            <h3 
            className={styles.socialName}
            style={hoverStyle}
            onMouseOver={hoverHandler}
            onMouseLeave={hoverHandler}>{props.socialName}</h3>
            <a 
            href={props.socialLink}
            className={styles.socialIcon}
            style= {mStyle ? mStyle : ""}
            >{props.socialIcon}</a>
            <p></p>
        </div>
    )
}

export default SocialLink;