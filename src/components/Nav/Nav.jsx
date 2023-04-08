import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'


export default function Nav(props){
    const { onSearch, logout } = props;
    return (
        <div className= {style.nav} >
            <Link to='/about'><span className= {style.navAbout}>About</span></Link>
            <Link to='/home'><span className= {style.navHome} >Home</span></Link>
            <SearchBar onSearch={onSearch}/>
            <button onClick={logout}>LOGOUT</button>
        </div>
    );
}