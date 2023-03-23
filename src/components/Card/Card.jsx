import React from "react";
import './Card.css'


export default function Card(props) {
   return (
      <div className="divPpal">
         <button className="x" onClick={props.onClose}>X</button>
         <h2 className="h2" > {props.name} </h2>
         <h2 className="h2">{props.species}</h2>
         <h2 className="h2">{props.gender}</h2>
         <img className="img" src={props.image} alt="Imagenes Random" />     
      </div>
   );
}
