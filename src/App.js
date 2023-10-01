import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import {  BrowserRouter as Browse , Routes, Route } from 'react-router-dom';
import food from './food';
function App() {
  return (
    <>
    <Header />
    
  <Browse>
    <Routes>
    <Route exact path="/" Component={Main} />
    <Route exact path="/food" Component={food} />
    </Routes>
  </Browse>
    </>
  );
}

export default App;
