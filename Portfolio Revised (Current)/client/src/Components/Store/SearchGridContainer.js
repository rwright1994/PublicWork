import axios from 'axios';
import styles from './SearchGridContainer.module.css';
import SearchFilterPanel from './SearchFilterPanel';
import SearchResultsPanel from './SearchResultsPanel';
import { useEffect, useState} from 'react';

const SearchGridContainer = (props) => {


    const [data, setData] = useState([]);
    const [productGroups,setProductGroups] = useState([]);
    const [productList,setProductList] = useState([]);
    const [productFilters, setProductFilters] = useState([]);
  

    //setProductGroups
    useEffect(() => {
        setProductGroups(['Video Game', 'Food','Bathroom','Bedroom','Pets']);
    },[])

    //send query to database to retrive products
    const loadDatabase = () => {
        axios.get('http://localhost:5000/demo')
        .then((res) => {
            setProductList(res.data);
            setData(res.data);
        })
        .catch( (err) => {
            console.log(err);
        })
    }

    //query database for inital state.
    useEffect( () => {
        loadDatabase();
      },[]);

    useEffect(() => {
        productList.sort(function (itemA,itemB){
           if(itemA.name.toLowerCase() < itemB.name.toLowerCase()){
               return -1;
           }else{
               return 1;
           }
        });
    },[productList])

      // Video games, Pets, Bathroom
      const handleCheckboxChange = (e) => {
        //set filters to current state of productFilters.
        let filters = productFilters;
        //if checked, push filter onto array
        if(e.target.checked === true){            
            filters.push(e.target.value);
            setProductFilters(filters);
        //if toggeled to not checked, remove filter from filters array. 
        }else{
            for(let i = 0; i < filters.length; i++ ){
                //if array matches checkbox value.
                if(filters[i] === e.target.value){
                    //remove filter from list.
                    filters.splice(i,1);
                    //set productFilters to new filters.
                    setProductFilters(filters);
                    //return from loop.
                    filterProductListByCatagory();
                    return;
                }
            }
        }
        filterProductListByCatagory();
      }
  

    function filterProductListByCatagory(){
        //filter productList by catagory.
        console.log(productFilters.length);
        if(productFilters.length > 0){
            setProductList(data.filter((product) => productFilters.includes(product.catagory)));
            
        }else{
            setProductList(data);
        }
    }
    
    return(
        <div className={styles.searchGridContainer}>
            <SearchFilterPanel productGroups={productGroups} handleCheck={handleCheckboxChange}/>
            <SearchResultsPanel itemList={productList}  />
        </div>
    )
}

export default SearchGridContainer;