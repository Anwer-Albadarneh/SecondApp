import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import {  BrowserRouter as Browse , Routes, Route } from 'react-router-dom';
import foodItems from './foodItems';

function App() {
  return (
    <>
    <Header />
    
  <Browse>
    <Routes>
    <Route exact path="/" Component={Main} />
    <Route exact path="/food" Component={foodItems} />
    </Routes>
  </Browse>
    </>
  );
}

export default App;
