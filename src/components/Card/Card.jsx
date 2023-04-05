import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
      <div className={style.divPpal} >
            <button className={style.x} onClick={props.onClose}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2 >{props.name}</h2>
            </Link>
            <img src={props.image} alt="Not found" />
            <div className={style.text} >
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2> 
            </div>                  
      </div>
   );
}