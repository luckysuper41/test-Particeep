import React from 'react';
import './SearchCategory.css';
import PropTypes from 'prop-types';

export default function SearchCategory(props) {
     const {
          categories, 
          update
     } = props;
     return (
          <div className="search-bar">
               <span className="search-title">Category:</span>
               <select className="Select" onChange={event => update(event.target.value)}>
                    <option value='all'>All categories</option>
                    {categories.map(category => 
                    <option key={category} value={category}>{category}</option>
                    )}
               </select>
          </div>
     )
}

SearchCategory.propTypes = {
     categories: PropTypes.array, 
     update: PropTypes.func
};

SearchCategory.defaultProps = {
     categories: null, 
     update: null
}