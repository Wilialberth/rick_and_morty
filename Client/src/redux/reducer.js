const initialState = { 
    myFavorites: []
};

const reducer = (state = initialState, { type, payload }) => { // type guarda la info, le digo que haga algo a partir de la info que le paso.
    switch (type) { // payload: aparece ya que toma un valor particular y hace algo con ese valor.
        case 'ADD_FAVORITE':
            let copy1 = state.myFavorites; // hago una copia del array
            copy1.push(payload); // agrego el payload a la copia
            return { ...state, myFavorites: copy1 };

        case 'REMOVE_FAVORITE':
            let copy2 = state.myFavorites.filter((char) => {
            return char.id !== Number(payload); // preguntar !== Number(payload)
        });
            return { ...state, myFavorites: copy2 };
        default:
            return {...state}
    }
};

export default reducer;