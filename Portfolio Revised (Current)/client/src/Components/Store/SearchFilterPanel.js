import styles from './SearchFilterPanel.module.css';

const SearchFilterPanel = (props) => {

    const productFilters = props.productGroups.map( (filter,index) => 
    <li key={index} className={styles.productFilter}>
        <input 
        className={styles.productCheckBox} 
        onChange={props.handleCheck} 
        value={filter}
        type="checkbox"/>{filter}
    </li>
    );

    return (
        <div className={styles.searchFilterPanel}>
            <h1>Filters</h1>
                <ul className={styles.productFilterList}>
                    {productFilters}
                </ul>
        </div>
    )
}

export default SearchFilterPanel;