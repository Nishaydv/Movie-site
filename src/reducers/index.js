import {combineReducers} from 'redux';
//In reducers we are expressing an intent to change the state we are not changing the state directly
import { ADD_MOVIES, 
    ADD_MOVIE_TO_LIST,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES,
    ADD_SEARCH_RESULT} from '../actions'; 

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
    console.log('MOVIES REDUCER');
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
           };
           case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: action.val
            };
            case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    list: [action.movie,...state.list]
            } ;
        default: 
           return state;
    }
}


//search reducer
const initialSearchState= {
    showSearchResults: false,
    result: {}
};

export function search(state=initialSearchState,action){
        console.log('Search Reducer');
         switch(action.type){
              case ADD_SEARCH_RESULT:
                  return{
                      ...state,
                      result:action.movie,
                      showSearchResults: true
                  }
                  case ADD_MOVIE_TO_LIST:
                     return {
                    ...state,
                    showSearchResults:false
            }
             default: 
                return state;
         
}
}
//rootReducer
// const initialRootState={
//     movies: initialMoviesState,
//     search:initialSearchState
// }
// export default function rootReducer(state = initialRootState,action){
//    return{
//        movies: movies(state.movies,action)  ,
//        search: search(state.search,action)
//    }
// }

export default combineReducers({
    movies,
    search
});

