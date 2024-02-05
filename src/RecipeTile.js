import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile({recipe}) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
    // != null &&(
    <div className="recipeTile" onClick={()=>{
        Window.open(recipe["recipe"]["url"])
    }}>
        <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} />
         <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>   

 </div>
    )
  
}
