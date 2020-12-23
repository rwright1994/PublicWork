import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import Brand from './Brand';
import MobileNav from './MobileNav';

const Navbar = () => {
    return(
    <div className={styles.clearfix}> 
        <nav className={styles.navbar}>
            <Brand brandName="Navbar Brand"/>

                
                <ul className={styles.links}>
                    <li className={styles.link}><Link to="/">Home</Link></li>
                    <li className={styles.link}><Link to="/about">About</Link></li>
                    <li className={styles.link}><Link to="/demo">Demo</Link></li>
                    <li className={styles.link}><Link to="/resume">Resume</Link></li>
                    <li className={styles.link}><Link to="/templates">Templates</Link></li>
                </ul>

               <MobileNav/>
        </nav>
    </div>
    )
}

export default Navbar