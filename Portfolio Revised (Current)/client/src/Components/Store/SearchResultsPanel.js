
import styles from './SearchResultsPanel.module.css';
import Item from '../Items/Item';


const SearchResultsPanel = (props) => {


    
    const items = props.itemList.map( (item,index) => 
    
        <Item 
        key={index} 
        name={item.name} 
        price={item.price}
        description={item.description}
        img={item.imgURL}
        ></Item>
    );

    return (
        <div className={styles.searchResultsPanel}>
            {items}
        </div>
    )
}

export default SearchResultsPanel;