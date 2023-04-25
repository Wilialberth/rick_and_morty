import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";



export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const { addFav, removeFav, myFavorites } = props;

   const handleFavorite = () => {
      isFav ? removeFav(props.id) : addFav(props);
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   /* useEffect(() => {
  // Effect code here
}, [props.id]); */


   return (
      <div className={style.divPpal} >
            {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
            <button className={style.x} onClick={props.onClose}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2 className={style.divName} >{props.name}</h2>
            </Link>
            <img src={props.image} alt="Not found" />
            <div className={style.text} >
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2> 
            </div>                  
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);