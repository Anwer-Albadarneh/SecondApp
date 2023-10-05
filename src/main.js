// import data from './data.json';
import Cardcomp from './card';
import './card.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Main(){
    // let [items, setItems] = useState([]);
    let [meals, setMeals] = useState([])

    

    async function getMealsData(){

      let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=S')
      let data = await response.json();
      setMeals(data.meals)

 
}
useEffect(function (){getMealsData()}, [])

   async function handelSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value;
        let filteredItems = meals.filter(function(item){return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase())})
        setMeals(filteredItems);
    }
    return(
        <>
          <Form className="d-flex" onSubmit={handelSubmit}  id="searchBar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
              
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div className="design">
          
        {meals.length !==0 ? meals.map(function(Food){
            return(
              <>
                <Cardcomp image={Food.strMealThumb} title={Food.strMeal} description={Food.strInstructions}/>
                </>
           ) 
        } 
            ) : <h2>No search results</h2>  
            
            } 
           
        </div>

        </>
    ) 
} 
export default Main;
