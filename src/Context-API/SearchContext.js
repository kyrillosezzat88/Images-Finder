import React , {createContext , useState, useEffect} from 'react'
import axios from 'axios';

export const SearchContext = createContext();
const SearchCntextProvidor = (props) =>{
    const [search , setSearch] = useState('');
    const [Results , setResults] = useState([ ]);
    const Api = '15904505-b2759c091eeb01ad30cae943e';
    const SearchBtn = (e) => {
        e.preventDefault();
        axios.get(`https://pixabay.com/api/?key=${Api}&q=${search}&image_type=photo&per_page=12`)
            .then(res => {
                setResults(res.data.hits);
            })
            .catch(err => {
                console.log(err)
            });
    }
    return(
        <SearchContext.Provider value={{setSearch , Results , SearchBtn}}>
            {props.children}
        </SearchContext.Provider>
    )
}
export default SearchCntextProvidor;