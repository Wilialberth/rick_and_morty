import './App.css'
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import { Route, Routes } from 'react-router-dom';


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
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose}/>}
        />
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route
          path='/detail/:detailId'
          element={<Detail/>}
        />
        <Route
        path='*'
        element={<Error/>}
        />
      </Routes>
    </div>
  )
} 

/* return (
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
)} */

export default App