import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.search} >
         <input className={style.input} type='search' placeholder="Buscar..."  />
      <button className={style.searchButton} onClick={()=>props.onSearch("Buscando...")}>Agregar</button>
      </div>
   );
}