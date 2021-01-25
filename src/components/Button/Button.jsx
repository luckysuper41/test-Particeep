import React from 'react';
import './Button.css';

export default function Button(props) {
     const {content, handleClick, className, type, flip} = props;
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
