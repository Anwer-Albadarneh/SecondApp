import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Cardcomp from "./card";
import { useEffect } from 'react';




function FoodItems(){
  let [meals, setMeals] = useState([])
  let [category,setCategory]= useState([])

  async function getMealsData(){
      
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let data = await response.json();
    setMeals(data.meals)

}


async function Catt(){
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  let data = await response.json();
  setCategory(data.meals)
}

async function handleChange(event){
  let changeValue = event.target.value;
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+changeValue)
  let data = await response.json(); 
  if(changeValue === "All"){
    setMeals(data.meals)
  } else{
    let filteredItems=data.meals.filter(function(meals){return meals.strCategory == changeValue})
    setMeals(filteredItems)
  }
}

useEffect(()=>{getMealsData()
    
    Catt()}, [])


    return (
      <>
        <Form.Select aria-label="Default select example" onChange={handleChange}>
          <option value="All">All</option>
          {category.map(function (category) {
            return <option value={category.strCategory}>{category.strCategory}</option>
          })}
        </Form.Select>
        <div className="design">
          {meals !== null ? meals.map(function (meals) {
            return (
              <>
                <Cardcomp image={meals.strMealThumb} title={meals.strMeal} description={meals.strInstructions} />
              </>
            )
          }) : <h2>No search results</h2>}
        </div>
      </>
    )
  }
  
  export default FoodItems;

