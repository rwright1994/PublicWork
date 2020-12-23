import styles from './Footer.module.css';
import navStyles from '../Navigation/Navbar.module.css';

import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <ul className={styles.links}>
                <li className={navStyles.link}><Link to="/">Home</Link></li>
                <li className={navStyles.link}><Link to="/about">About</Link></li>
                <li className={navStyles.link}><Link to="/demo">Demo</Link></li>
                <li className={navStyles.link}><Link to="/resume">Resume</Link></li>
                <li className={navStyles.link}><Link to="/templates">Templates</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;