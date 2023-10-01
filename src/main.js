import data from './data.json';
import Cardcomp from './card';
import './card.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Main(){
    let [items, setItems] = useState(data)

    function handelSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value;
        let filteredItems = data.filter(function(item){return item.title.toLowerCase().includes(searchedValue.toLowerCase())})
        setItems(filteredItems);
    }
    return(
        <>
          <Form className="d-flex" onSubmit={handelSubmit} id="searchBar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
              
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div id='design'>
        {items.map(function(Food){
            return(
                <Cardcomp image={Food.image_url} title={Food.title} description={Food.description} price={Food.price}/>
           ) 
        }
            )
           }
        </div>

        </>
    )
}
export default Main;
