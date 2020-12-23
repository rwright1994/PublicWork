import {useState} from 'react';


import styles from './Store.module.css';
import StoreHeader from '../Store/StoreHeader';
import QuickLinks from '../Store/QuickLinks';
import LongAdBanner from '../Store/LongAdBanner';
import SearchGridContainer from '../Store/SearchGridContainer';






const Store = (props) => {

 ;
    const [searchInput, setSearchInput] = useState('');
    

    //Handle search input change
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

   

    return(
        <div className={styles.mainContainer}>
          <StoreHeader 
            inputChange={handleInputChange} 
            searchInput={searchInput}/>
          <QuickLinks/>
          <LongAdBanner />
          <SearchGridContainer searchInput={searchInput}/>
        </div>
    )
}

export default Store;