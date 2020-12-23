import styles from './QuickLinks.module.css';

const QuickLinks = (props) => {
    return(
        <div >
            <ul className={styles.quickLinksContainer}>
              <li className={styles.quickLink}>Electronics</li>
              <li className={styles.quickLink}>Food</li>
              <li className={styles.quickLink}>Auto</li>
            </ul>
        </div>
    )
}

export default QuickLinks;