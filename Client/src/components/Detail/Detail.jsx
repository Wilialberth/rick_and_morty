import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from 'src/components/Detail/Detail.module.css';

export default function Detail () {

    const { detailId } = useParams();
    const navigate = useNavigate();
    // console.log(detailId);
    const [character, setCharacter] = useState({});

    function navegar(){
        navigate('/home')
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                // console.log(char)
              setCharacter(char); //{info personaje}
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <button onClick={navegar}>Ir a Home</button>
            <h1>Name: {character.name}</h1>
            <div className= {styled.detailText}  >
                  <h2 >STATUS: {character.status}</h2>
                  <h2>ESPECIE: {character.species}</h2>
                  <h2>GÉNERO: {character.gender}</h2>
                  <h2>ORIGEN: {character.origin?.name}</h2>
            </div>
            <img className= {styled.imgDetail} src={character.image} alt="img not found"/>
        </div>
    )
}