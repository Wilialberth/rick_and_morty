import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'


export default function Nav(props){
    const { onSearch } = props;
    return (
        <div className= {style.nav} >
            <Link to='/about' className= {style.navAbout} ><span>About</span></Link>
            <Link to='/home'><span>Home</span></Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}