import { Link } from 'react-router-dom';
import SearchBar from 'src/components/SearchBar/SearchBar';
import style from 'src/components/Nav/Nav.module.css'


export default function Nav({ onSearch, logout }){
    
    return (
        <div className= {style.nav} >
            <Link to='/about'><span className= {style.navAbout}>About</span></Link>
            <Link to='/home'><span className= {style.navHome} >Home</span></Link>
            {/* <Link to='/favorites'><button className= {style.navFav} >Favorites</button></Link> */}
            <Link to='/favorites' ><span className= {style.navFav} >My favorites</span></Link>
            <SearchBar onSearch={onSearch}/>
            <button className={style.logout} onClick={logout}>Logout</button>
        </div>
    );
}