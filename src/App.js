import React,{Fragment, useState} from 'react';
import "./App.css";
import {useSelector} from 'react-redux';
import SearchCategory from './components/SearchCategory/SearchCategory';
import Card from "./components/Card/Card";

function App() {
  // redux
  const data = useSelector(state => state.data);

  // hook
  const [searchCategory, setSearchCategory] = useState([]); 

  //MultiSelect - options
  const options = [
    (data.findIndex(element=>element.category === "Comedy") >= 0 ?
      { label: "Comedy 🎭", value: "Comedy"}
      :{ label: "Comedy 🎭", value: "Comedy", disabled: true}),

    (data.findIndex(element=>element.category === "Animation") >= 0 ?
      { label: "Animation 👑", value: "Animation" }:
      { label: "Animation 👑", value: "Animation", disabled: true }),

    (data.findIndex(element=>element.category === "Thriller") >= 0 ?
      { label: "Thriller 👻", value: "Thriller"}:
      { label: "Thriller 👻", value: "Thriller", disabled: true}),

    (data.findIndex(element=>element.category === "Drame") >= 0 ?
      { label: "Drame 🧛", value: "Drame" }:
      { label: "Drame 🧛", value: "Drame", disabled: true })
  ];

  return (
    <Fragment>
      <SearchCategory 
        options={options} 
        value={searchCategory} 
        onChange={setSearchCategory} 
      />
      <div className="list-card">
        {data.filter((item_category)=>{
          if(searchCategory.length === 0){
            return item_category;
          }else if(searchCategory.findIndex((element)=>element.value === item_category.category) >= 0){
            return item_category;
          }else{
            return null;
          }
        }).map( (item) => (
          <div key={item.id} className="card-element">
            <Card 
              item={item} 
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
