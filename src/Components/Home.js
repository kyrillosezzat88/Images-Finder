import React , {useContext} from 'react'
import Search from './Search';
import '../Styles/Home.css'
import { SearchContext } from '../Context-API/SearchContext';
import { Link } from 'react-router-dom';
const Home = () => {
    const {Results} = useContext(SearchContext);
    return(
        <div className="Home">
            <Search />
            <div className="Results">
                {Results.map(img => (
                    <div className="img" key={img.id}>
                        <Link to={'/' + img.id}>
                            <img src={img.webformatURL}/>
                            <div className="overlay"></div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home ;