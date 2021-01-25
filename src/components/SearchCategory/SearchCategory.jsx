import React from 'react';
import './SearchCategory.css';
import MultiSelect from "react-multi-select-component";
import PropTypes from 'prop-types';

export default function SearchCategory(props) {
     const {
          options, 
          value, 
          onChange
     } = props;
     return (
          <div className="search-bar">
               <span className="search-title">Category:</span>
               <MultiSelect
                    className="search-input"
                    options={options}
                    value={value}
                    onChange={onChange}
                    labelledBy={"Select"}
               />
          </div>
     )
}

SearchCategory.propTypes = {
     options: PropTypes.array, 
     value: PropTypes.array, 
     onChange: PropTypes.func
};

SearchCategory.defaultProps = {
     options: null, 
     value: null, 
     onChange: null
}