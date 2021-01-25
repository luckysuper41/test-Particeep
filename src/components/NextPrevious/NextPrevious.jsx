import React from 'react';
import './NextPrevious.css';
import PropTypes from 'prop-types';

export default function NextPrevious(props) {
     const {
          minPage,
          setMinPage,
          actualPage,
          setActualPage,
          numberOfItems,
          maxPage
     } = props;

     const handleNextPage = () =>{
          setActualPage(actualPage + 1);
          setMinPage(minPage + numberOfItems);
     }
     const handlePreviousPage = () =>{
          setActualPage(actualPage - 1);
          setMinPage(minPage - numberOfItems);
     }
     
     const handleFirstPage = () => {
          setActualPage(1);
          setMinPage(0);
     }
     
     const handleLastPage = () => {
          setActualPage(maxPage);
          setMinPage((maxPage -1)*numberOfItems);
     }


     return (
          <div className="next-previous">
               <button 
                    onClick={handleFirstPage}
                    className="button-next-previous"
                    disabled={actualPage === 1 ? true : false}
               > 
               &#171;
               </button>
               
               <button 
                    onClick={handlePreviousPage}
                    className="button-next-previous"
                    disabled={actualPage === 1 ? true : false}
               > 
               &#8249;
               </button>

               <span className="content-next-previous">{actualPage}/{maxPage}</span>

               <button 
                    onClick={handleNextPage}
                    className="button-next-previous"
                    disabled={actualPage >= maxPage ? true : false}
               > 
               &#8250;
               </button>

               <button 
                    onClick={handleLastPage}
                    className="button-next-previous"
                    disabled={actualPage >= maxPage ? true : false}
               > 
               &#187;
               </button>
          </div>
     )
}

NextPrevious.propTypes = {
     minPage: PropTypes.number,
     setMinPage: PropTypes.func,
     actualPage: PropTypes.number,
     setActualPage: PropTypes.func,
     numberOfItems: PropTypes.number,
     maxPage: PropTypes.number
};

NextPrevious.defaultProps = {
     minPage: null,
     setMinPage: null,
     actualPage: null,
     setActualPage: null,
     numberOfItems: null,
     maxPage: null
}