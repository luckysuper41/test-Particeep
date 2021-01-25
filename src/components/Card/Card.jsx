import React,{useState} from 'react';
import './Card.css';
import {useDispatch} from 'react-redux';
import {removeData, changeLikeDislike} from '../../redux/dataSlice';

import Button from "../Button/Button";
import PropTypes from 'prop-types';

export default function Card(props) {
     const {item} = props;

     //hook
     const [isLike, setIsLike] = useState(false);
     const [isDislike, setIsDislike] = useState(false);
     const dispatch = useDispatch();

     // handleRemoveData
     const handleRemoveData = (item) => {
          const removeDataId = item.id;
          const action = removeData(removeDataId);
          dispatch(action);
     }
 
     // handleLike
     const handleLike = (item) => {
          setIsLike(!isLike);
          let newData; 
          if(!isLike && !isDislike){
          newData = {
          ...item,
          likes: item.likes + 1,
          };
          };
          if(isLike && !isDislike){
          newData = {
          ...item,
          likes: item.likes - 1,
          };
          };
          if(!isLike && isDislike){
          newData = {
          ...item,
          likes: item.likes + 1,
          dislikes: item.dislikes - 1
          };
          setIsDislike(false);
          };
          const action = changeLikeDislike(newData);
          dispatch(action);
     }
     
     // handleDislike
     const handleDislike = (item) => {
          setIsDislike(!isDislike);
          let newData; 
          if(!isLike && !isDislike){
          newData = {
          ...item,
          dislikes: item.dislikes + 1,
          };
          };
          if(!isLike && isDislike){
          newData = {
          ...item,
          dislikes: item.dislikes - 1,
          };
          };
          if(isLike && !isDislike){
          newData = {
          ...item,
          likes: item.likes - 1,
          dislikes: item.dislikes + 1
          };
          setIsLike(false);
          };
          const action = changeLikeDislike(newData);
          dispatch(action);
     }

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
                              handleClick = {()=>handleLike(item)}
                              className={isLike ? "button-like active":"button-like"}
                              type="button"
                         />
                         <span>{item.likes}</span>
                    </div>
                    <div className="ele-like-dislike">
                         <Button
                              content={<i className="fas fa-thumbs-down"></i>}
                              handleClick = {()=>handleDislike(item)}
                              className={isDislike ? "button-dislike active":"button-dislike"}
                              type={"button"}
                              flip={flipIcon}
                         />
                         <span>{item.dislikes}</span>
                    </div>
               </div>
               <div className="card-remove">
                    <Button
                         content="X"
                         handleClick = {()=>handleRemoveData(item)}
                         className="button-remove"
                         type="button"
                    />
               </div>
               
          </div>
     )
}

Card.propTypes = {
     item: PropTypes.object
};

Card.defaultProps = {
     item: null
}