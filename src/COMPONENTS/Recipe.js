import React from 'react';
import './recipe.css'


const Recipe = ({title,calories,image,ingredients, idi }) => {
    return(
        <div key={idi} className="container-recipe">
            <h1>{title}</h1>
        <div className='list'>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
         </div>
            <h3> Calories : {calories.toFixed(2)}</h3>
            <img className='image' src={image} alt=""></img>
        </div>
    );
}

export default Recipe;