import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './body.css'

const Body = () => {
    const APP_ID = "ead654f2";
    const APP_KEY = "a768a1ec9d5eab8a0386e4f2f6bdd6a6";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState(null);

    const getApiRecipes = async () => {
        const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
        );    
        const data = await response.json();
        setRecipes(data.hits)
    }

    useEffect(() => {
        getApiRecipes();
    }, [query]);

    const inputHandle = e => {
        setSearch(e.target.value)
    }

    const submitHandle = e => {
        if (search) {
            e.preventDefault();
            setQuery(search);
            setSearch("")
        } else {
          console.log("no-text")
        }
    } 
    
    const deleteAll = () => {
        setRecipes([])
        setQuery(null)
    }

 if (query == null ) {
    return (
    <div className='welcome'>
        <div className='buttons'>
            <form onSubmit={submitHandle} className="search-form">
                <input placeholder='Enter The Keyword e.g.(salad, chicken..)' className='search-bar' type="text" value={search} onChange={inputHandle}></input>
                <button className='search-button'>Search</button>
            </form>
            </div>
        <div className='welcome-page'>
             <h1>WELCOME IN RECIPE FINDER</h1>
             <h3>Enter a keyword in the search to get the recipe</h3>
        </div>
    </div>
    ) 
 } else {
    return (
    <div className='App-box'>
         <div className='buttons'>
            <form onSubmit={submitHandle} className="search-form">
                <input placeholder='Enter The Keyword For The Recipe' className='search-bar' type="text" value={search} onChange={inputHandle}></input>
                <button className='search-button'>Search</button>
                <button className='clear-button' onClick={deleteAll}>Clear Search</button>
            </form>
        </div>
         <div className='b-b'>
             <h4 className='keyword'>Recipes for keyword <p className='b-keyword'>"{query}"</p></h4>
        </div>
        <div>
        </div>
         <div className='cont-map'>  
            { recipes.map((recipe,id) => (
            <Recipe
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
            ></Recipe>
            ) 
    )}
             </div>
        </div>
      )

 }

}

export default Body