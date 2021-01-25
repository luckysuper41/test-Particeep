import React from 'react';
import './NumberItemsShow.css';
import PropTypes from 'prop-types';

export default function NumberItemsShow(props) {
     const {
          numberOfItems,
          setNumberOfItems,
          setMinPage,
          setActualPage
     } = props;
     return (
          <div className="items-show">
               <button 
                    className={numberOfItems === 4 ?
                         "button-items-show active"
                         :"button-items-show" }
                    onClick={()=>{
                         setNumberOfItems(4);
                         setMinPage(0);
                         setActualPage(1);
                    }}
               >4</button>
               <button 
                    className={numberOfItems === 8 ?
                         "button-items-show active"
                         :"button-items-show" }
                    onClick={()=>{
                         setNumberOfItems(8);
                         setMinPage(0);
                         setActualPage(1);
                    }}>
               8</button>
               <button 
                    className={numberOfItems === 12 ?
                         "button-items-show active"
                         :"button-items-show" }
                    onClick={()=>{
                         setNumberOfItems(12);
                         setMinPage(0);
                         setActualPage(1);
                    }}
               >12</button>
          </div>
     )
}

NumberItemsShow.propTypes = {
     numberOfItems: PropTypes.number,
     setNumberOfItems: PropTypes.func,
     setMinPage: PropTypes.func,
     setActualPage: PropTypes.func
};

NumberItemsShow.defaultProps = {
     numberOfItems: null,
     setNumberOfItems: null,
     setMinPage: null,
     setActualPage: null
}