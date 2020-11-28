import { combineReducers } from 'redux';
//In reducers we are expressing an intent to change the state we are not changing the state directly
import { ADD_MOVIES, 
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES} from '../actions'; 

const initialMoviesState= {
    list: [],
    favourites: [],
    showFavourites: false
}
export  function movies(state= initialMoviesState, action){
   /* if (action.type=== ADD_MOVIES){
        return {
            ...state,
            list: action.movies
        };
    }
    return state;*/
    switch(action.type){
         case ADD_MOVIES:
             return {
                 ...state,
                 list: action.movies
             }
         case ADD_TO_FAVOURITES: 
           return{ 
            ...state, 
            favourites: [action.movie,...state.favourites]
             }
         case REMOVE_FROM_FAVOURITES: 
           const filteredArray= state.favourites.filter(
               movie=>movie.Title !== action.movie.Title
           );
           return{
              ...state,
              favourites: filteredArray
           }
           case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: action.val
            }  
        default: 
           return state;
    }
}


//search reducer
const initialSearchState= {
    result: {}
};

export function search(state=initialSearchState,action){
    return state;
}
//rootReducer
const initialRootState={
    movies:initialMoviesState,
    search:initialSearchState
}
// export default function rootReducer(state = initialRootState,action){
//    return{
//        movies: movies(state.movies,action)  ,
//        search: search(state.search,action)
//    }
// }

export default combineReducers({
    movies: movies,
    search: search
})