import React from "react";
import style from "./Card.module.css"


export default function Card(props) {
   return (
      <div className={style.divPpal} >
      <button className={style.x} onClick={props.onClose}>X</button>
      <h2> {props.name} </h2>
      <img src={props.image} alt="Image not found" />
         <div className={style.text} >
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>              
   </div>
   );
}