import styles from './Contact.module.css';

const Contact = (props) => {
    return(
        <div className={styles.contactRow}>
            <h3>{props.desc}</h3>
            <i>{props.icon}</i>
            <a href = "mailto:robertstephenwright94@gmail.com">{props.link}</a>
        </div>
    )
}

export default Contact
