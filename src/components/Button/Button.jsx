import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button(props) {
     const {
          content, 
          handleClick, 
          className, 
          type, 
          flip
     } = props;
     return (
          <>
               <button 
                    onClick={handleClick}
                    className={className}
                    type={type}
                    style={flip}
               >
                    {content}
               </button>
          </>
     )
}

Button.propTypes = {
     content: PropTypes.any,
     type: PropTypes.string,
     className: PropTypes.string,
     handleClick: PropTypes.func,
     flip: PropTypes.object
};

Button.defaultProps = {
     content: null,
     type: null,
     className: null,
     handleClick: null,
     flip: null
}