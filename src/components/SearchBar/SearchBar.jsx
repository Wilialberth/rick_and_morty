import React from "react";
import './SearchBar.css'

export default function SearchBar(props) {
   return (
      <div className="search" >
         <input type='search' placeholder="Buscar..."  />
      <button className="searchButton" onClick={()=>props.onSearch("Buscando...")}>Agregar</button>
      </div>
   );
}