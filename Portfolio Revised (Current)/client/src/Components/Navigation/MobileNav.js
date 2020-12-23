import styles from './MobileNav.module.css';
import {FaAlignJustify} from 'react-icons/fa';


const MobileNav = () => {
    return (
    <div className={styles.mobileNav} >
        <FaAlignJustify className={styles.navIcon} size="24"/>
    </div>
    )
}

export default MobileNav;