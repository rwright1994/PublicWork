import styles from './Brand.module.css';

const Brand = (props) => {
    return (
        <p className={styles.Brand}>{props.brandName}</p>
    )
}

export default Brand;