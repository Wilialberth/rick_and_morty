import React from 'react';
import Card from 'src/components/Card/Card';
import style from "src/components/Cards/Cards.module.css"
// import styled from 'styled-components';



export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={style.cards} >
     {characters.map((personajes) => (
      <Card 
      id = {personajes.id}
      name = {personajes.name}
      species = {personajes.species}
      gender = {personajes.gender}
      image = {personajes.image}
      onClose={() => props.onClose(personajes.id)}
      />))}
   </div>
   );
}