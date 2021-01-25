import React from 'react';
import './SearchCategory.css';
import MultiSelect from "react-multi-select-component";

export default function SearchCategory(props) {
     const {options, value, onChange} = props;
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
