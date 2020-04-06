import React , {useContext} from 'react';
import { SearchContext } from '../Context-API/SearchContext';
const Search = () => {
    const {setSearch ,SearchBtn} = useContext(SearchContext);
    const setvalue = (e) => {
        setSearch(e.target.value);
    }
    return(
        <form onSubmit={SearchBtn}>
            <input type="text" placeholder='Saerch For Images' onChange={setvalue} required />
            <button>Search</button>
        </form>
    )
}
export default Search;