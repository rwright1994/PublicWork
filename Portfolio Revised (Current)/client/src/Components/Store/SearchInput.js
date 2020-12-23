import styles from './SearchInput.module.css';

const SearchInput = (props) => {



    return(
        <div className={styles.searchContainer}>
            <form onSubmit={props.submit}>
                <input 
                className={styles.searchInput} 
                value={props.searchInput} 
                name="searchInput" 
                onChange={props.inputChange} 
                placeholder="Search..."/>
                <button className={styles.searchBtn}  type="submit"> Search </button> 
            </form>
        </div>
    )
}

export default SearchInput;