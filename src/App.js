import './App.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';



function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };
  function onClose(id){
    const newCharacters = characters.filter((charac) => charac.id !== Number(id));
    setCharacters(newCharacters);
  }

return (
  <div className='App'>
    <div>
      <Nav onSearch={onSearch}/>
    </div>
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
  </div>
)
}



export default App