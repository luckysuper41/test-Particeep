import { createSlice } from '@reduxjs/toolkit';

const initState = {
     movies: [],
     filteredMovies:[],
     categories: [],
     filteredCategory: 'all',
     loading: false,
     error: false
};

const dataSlice = createSlice({
     name: 'data',
     initialState: initState,
     reducers: {

          LOADING: (state, action) => {
               return {...state,loading:true};
          },
          
          ERROR: (state, action)=>{
               return {...state, loading: false, error: action.payload};
          },

          FETCH_DATA: (state, action)=>{
               return {...state, loading:false, error: false, movies: action.payload}
          },

          UPDATE_CATEGORY_LIST: (state, action) => {
               const newCategories = [...new Set(state.movies.map(movie => movie.category))];
               return {...state, categories: newCategories, loading: false, error: false};
          },

          FILTER_MOVIES: (state, action) => {
               const newFilteredMovies = state.movies.filter(movie => movie.category === state.filteredCategory);
               if(newFilteredMovies.length === 0){
                    return {...state, filteredMovies: state.movies, filteredCategory: 'all', loading:false, error: false};
               }
               return {...state, filteredMovies: newFilteredMovies, loading: false, error:false};
          },

          UPDATE_FILTERED_CATEGORY: (state, action) => {
               return{...state, filteredCategory: action.payload}
          },

          REMOVE_MOVIE: (state, action) => {
               const removeDataId = action.payload;
               const NewMovies = state.movies.filter(item => item.id !== removeDataId);
               return {...state, movies: NewMovies};
          },

          UPDATE_LIKE: (state, action) => {
               const dataChangeIndex = state.movies.findIndex(item => item.id === action.payload);
               const thisData = {...state.movies[dataChangeIndex]};
               let status = thisData.status;
               if(status === 'none'){
                    thisData.status = 'liked';
                    thisData.likes +=1;
                    return {...state, movies:[...state.movies.slice(0, dataChangeIndex), thisData, ...state.movies.slice(dataChangeIndex + 1)]}
               } else if(status === 'liked'){
                    thisData.status = 'none';
                    thisData.likes -=1;
                    return {...state, movies:[...state.movies.slice(0, dataChangeIndex), thisData, ...state.movies.slice(dataChangeIndex + 1)]}
               } else if(status === 'disliked'){
                    thisData.status = 'liked';
                    thisData.likes +=1;
                    thisData.dislikes -=1;
                    return {...state, movies:[...state.movies.slice(0, dataChangeIndex), thisData, ...state.movies.slice(dataChangeIndex + 1)]}
               }
          },

          UPDATE_DISLIKE: (state, action) => {
               const dataChangeIndex = state.movies.findIndex(item => item.id === action.payload);
               const thisData = {...state.movies[dataChangeIndex]};
               let status = thisData.status;
               if(status === 'none'){
                    thisData.status = 'disliked';
                    thisData.dislikes +=1;
                    return {...state, movies:[...state.movies.slice(0, dataChangeIndex), thisData, ...state.movies.slice(dataChangeIndex + 1)]}
               } else if(status === 'disliked'){
                    thisData.status = 'none';
                    thisData.dislikes -=1;
                    return {...state, movies:[...state.movies.slice(0, dataChangeIndex), thisData, ...state.movies.slice(dataChangeIndex + 1)]}
               } else if(status === 'liked'){
                    thisData.status = 'disliked';
                    thisData.dislikes +=1;
                    thisData.likes -=1;
                    return {...state, movies:[...state.movies.slice(0, dataChangeIndex), thisData, ...state.movies.slice(dataChangeIndex + 1)]}
               }
          }
     }
});

const { actions, reducer } = dataSlice;
export const { 
     LOADING, 
     ERROR, 
     FETCH_DATA, 
     UPDATE_CATEGORY_LIST, 
     FILTER_MOVIES, 
     UPDATE_FILTERED_CATEGORY, 
     REMOVE_MOVIE,
     UPDATE_LIKE,
     UPDATE_DISLIKE
} = actions;
export default reducer;