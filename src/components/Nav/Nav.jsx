import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'


export default function Nav({ onSearch, logout }){
    
    return (
        <div className= {style.nav} >
            <Link to='/about'><span className= {style.navAbout}>About</span></Link>
            <Link to='/home'><span className= {style.navHome} >Home</span></Link>
            <Link to='/favorites'><button>Favorites</button></Link>
            <SearchBar onSearch={onSearch}/>
            <button className={style.logout} onClick={logout}>Logout</button>
        </div>
    );
}