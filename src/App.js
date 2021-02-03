import React,{Fragment, useState, useEffect} from 'react';
import "./App.css";
import {useSelector} from 'react-redux';
import SearchCategory from './components/SearchCategory/SearchCategory';
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Spinner from "./components/Spinner/Spinner";
import {useDispatch} from 'react-redux';
import { movies$ } from "./data/movies";

import {
  LOADING, 
  ERROR, 
  FETCH_DATA, 
  UPDATE_CATEGORY_LIST, 
  FILTER_MOVIES, 
  UPDATE_FILTERED_CATEGORY, 
  REMOVE_MOVIE,
  UPDATE_LIKE,
  UPDATE_DISLIKE
} from "./redux/dataSlice";

function App() {
  const dispatch = useDispatch();
  
  // hook
  useEffect(() => {
    const getData = async () => {
      dispatch(LOADING());
      try{
        const response = await movies$;
  
        if(!response || response === 0){
          return dispatch(ERROR("Not Found"));
        }
  
        response.forEach(movie => {
          movie.status = 'none'
        });
  
        dispatch(FETCH_DATA(response));
        dispatch(UPDATE_CATEGORY_LIST());
        dispatch(FILTER_MOVIES());
      }catch(error){
        console.log(error.message);
        dispatch(ERROR("Get movies error"));
      }
    }

    getData();
    
  }, [dispatch])

  // redux
  const data = useSelector(state => state.data);

  const removeMovie = (id) => {
    dispatch(REMOVE_MOVIE(id));
    dispatch(UPDATE_CATEGORY_LIST());
    dispatch(FILTER_MOVIES());
  }

  const updateFilter = (category) => {
    dispatch(LOADING());
    dispatch(UPDATE_FILTERED_CATEGORY(category));
    dispatch(FILTER_MOVIES());
  }

  const updateLike = (id) => {
    dispatch(UPDATE_LIKE(id));
    dispatch(FILTER_MOVIES());
  }

  const updateDislike = (id) => {
    dispatch(UPDATE_DISLIKE(id));
    dispatch(FILTER_MOVIES())
  }

  // Systeme de pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage, setMoviesPerPage] = useState(4)

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
  const currentFilteredMovies = data.filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)

  // Move to next page
  const pageUp = () => {
    setCurrentPage(currentPage+1);
  }

  // Move to previous page
  const pageDown = () => {
    setCurrentPage(currentPage-1);
  }

  if (data.loading){
    return <Spinner />
  }

  return (
    <Fragment>

      <SearchCategory 
        categories={data.categories} 
        update={updateFilter}
      />

      <Pagination 
        totalMovies={data.filteredMovies.length}
        indexOfFirstMovie={indexOfFirstMovie}
        indexOfLastMovie={indexOfLastMovie}
        currentPage={currentPage}
        pageUp={pageUp}
        pageDown={pageDown}
        changeMoviesPerPage={setMoviesPerPage} 
      />

      <div className="list-card">
        {currentFilteredMovies.map( (item) => (
            <Card 
              key={item.id}
              item={item} 
              remove ={removeMovie}
              updateLike={updateLike}
              updateDislike={updateDislike}
            />
        ))}
      </div>
      
    </Fragment>
  );
}

export default App;
