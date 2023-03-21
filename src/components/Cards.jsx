import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
     {characters.map((personajes) => (
      <Card 

      key = {personajes.id}
      name = {personajes.name}
      species = {personajes.species}
      gender = {personajes.gender}
      image = {personajes.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}   

      />
     ))}
   </div>
   );
}