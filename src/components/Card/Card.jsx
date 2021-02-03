import React from 'react';
import './Card.css';

import Button from "../Button/Button";
import PropTypes from 'prop-types';

export default function Card(props) {
     const {
          item,
          remove,
          updateLike,
          updateDislike
     } = props;

     const flipIcon = {
          transform: 'scaleX(-1)'
     }

     return (
          <div className="card-box">
               <div className="card-title">{item.title}</div>
               <div className="card-category">{item.category}</div>
               <div className="card-like-dislike">
                    <div className="ele-like-dislike">
                         <Button
                              content={<i className="fas fa-thumbs-up"></i>}
                              handleClick = {()=>updateLike(item.id)}
                              className={item.status === "liked" ? "button-like active":"button-like"}
                              type="button"
                         />
                         <span>{item.likes}</span>
                    </div>
                    <div className="ele-like-dislike">
                         <Button
                              content={<i className="fas fa-thumbs-down"></i>}
                              handleClick = {()=>updateDislike(item.id)}
                              className={item.status === "disliked" ? "button-dislike active":"button-dislike"}
                              type="button"
                              flip={flipIcon}
                         />
                         <span>{item.dislikes}</span>
                    </div>
               </div>
               <div className="card-remove">
                    <Button
                         content="X"
                         handleClick = {()=>remove(item.id)}
                         className="button-remove"
                         type="button"
                    />
               </div>
               
          </div>
     )
}

Card.propTypes = {
     item: PropTypes.object,
     remove: PropTypes.func,
     updateLike: PropTypes.func,
     updateDislike: PropTypes.func
};

Card.defaultProps = {
     item: null,
     remove: null,
     updateLike: null,
     updateDislike: null
}