import styles from './StoreHeader.module.css';
import Brand from '../Navigation/Brand';
import SearchInput from './SearchInput';
import AdBanner from './AdBanner';

const StoreHeader = (props) => {

    

    return (
        <div className={styles.header}>
            <Brand brandName="Brand"/>
            <SearchInput 
                inputChange={props.inputChange} 
                submit={props.submit}  
                searchInput={props.searchInput}/>
            <AdBanner/>
        </div>
    )
}

export default StoreHeader;