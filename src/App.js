 import { useState } from 'react';
import './App.css';
 //import './key.js';
 import axios from "axios";
import RecipeTile from './RecipeTile';

function App() {
  const [query,setQuery]=useState("");
  const [recipe,setRecipe]= useState([]);

  const YOUR_APP_ID ="fc2af104";  
  const YOUR_APP_KEY ="11c2c0c32ada5eae463eff3aa4e56f3d";	

  var url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;
 
 async function getRecipe() {
    var result = await axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipe();
  }
  return (
    <div className="app">
      <h1  className="app_h1">Food Recipe Menu🍔</h1>
      <form className="app_searchform" onSubmit={onSubmit}>
        <input type="text" placeholder="Enter Ingredient"
        className="app_add"
        value={query} onChange={(e)=>setQuery(e.target.value)}
        />
        <input type="submit" value="search" className="app_submit"/>
      </form>
      <div className="recipes_app">
       {recipe.map(recipe=>{
        return <RecipeTile recipe={recipe} />
       })}
      </div>

    </div>

   );
}

export default App;
