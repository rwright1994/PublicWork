import styles from './Banner.module.css';
import BannerAction from './BannerAction';

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.heading}>Websites are an extension of your business and every business has its own needs.</h1>
            </div>
            <BannerAction/>
        </div>
    )
}

export default Banner;
