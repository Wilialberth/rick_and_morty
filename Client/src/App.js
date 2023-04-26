import 'src/App.css'
import { useState, useEffect } from 'react';
import Cards from 'src/components/Cards/Cards';
import Nav from 'src/components/Nav/Nav';
import About from 'src/components/About/About';
import Detail from 'src/components/Detail/Detail';
import Error from 'src/components/Error/Error';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from 'src/components/Form/Form'; 
import Favorites from 'src/components/Favorites/Favorites';


function App () {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const username = '7jimenez.w@gmail.com';
  const password = '123456';
  const navigate = useNavigate();

  
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);


 /*  useEffect(() => {
    !access && navigate('/');
  }, [access]) */

  function login (userData){
      if (userData.username === username && userData.password === password) {
        setAccess(true);
        navigate ('/home');
      }  
  };

  
  function logout(){
    setAccess(false);
    navigate('/');
  };

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
      {pathname !== '/' && <Nav onSearch={onSearch} logout = {logout}/>}
      <Routes>
        <Route
          path='/'
          element = {<Form login={login}/>}
        />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose}/>}
        />
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route 
          path='/favorites'
          element={<Favorites/>}
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
export default App