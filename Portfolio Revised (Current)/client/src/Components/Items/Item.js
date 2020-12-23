import styles from './Item.module.css';

const Item = (props) => {
    return(
        <div className={styles.item}>
            <img className={styles.image} src={props.img} alt={props.name}/>
            <h1 className={styles.heading}>{props.name}</h1>
            <p className={styles.price}>{props.price}</p>
            <a className={styles.addBtn}>Add to Cart</a>
        </div>
    )
}

export default Item;