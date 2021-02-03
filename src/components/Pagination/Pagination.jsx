import React from 'react';
import './Pagination.css';
import PropTypes from 'prop-types';

export default function NumberItemsShow(props) {
     const {
          totalMovies,
          indexOfFirstMovie,
          indexOfLastMovie,
          currentPage,
          pageUp,
          pageDown,
          changeMoviesPerPage
     } = props;
     return (
          <div className="Pagination">
            <p>Items per page:</p>
            <select onChange={e => changeMoviesPerPage(e.target.value)} className="Select-numberItem">
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
            </select>
            <p className="Detail">{indexOfFirstMovie + 1} - {indexOfLastMovie} of {totalMovies}</p>
            <button 
                className="Button-page"
                disabled={currentPage > 1 ? false : true} 
                onClick={e => pageDown()}>&#8249;</button>
            <button
                className="Button-page"
                disabled={indexOfLastMovie >= totalMovies ? true : false}
                onClick={e => pageUp()} >&#8250;</button>
        </div>
     )
}

NumberItemsShow.propTypes = {
     totalMovies: PropTypes.number,
     indexOfFirstMovie: PropTypes.number,
     indexOfLastMovie: PropTypes.number,
     currentPage: PropTypes.number,
     pageUp: PropTypes.func,
     pageDown: PropTypes.func,
     changeMoviesPerPage: PropTypes.func,
};

NumberItemsShow.defaultProps = {
     totalMovies: null,
     indexOfFirstMovie: null,
     indexOfLastMovie: null,
     currentPage: null,
     pageUp:null,
     pageDown: null,
     changeMoviesPerPage: null,
}