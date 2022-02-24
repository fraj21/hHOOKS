import { useState } from "react";
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';
import {moviesData} from './data';
import AddMovie from './Components/AddMovie';
import 'antd/dist/antd.css';


function App() {
const [movies,setmovies] = useState(moviesData);
const [inputSearch,setinputSearch] = useState('');
const add=(AddMovie)=>{
  return setmovies([...movies,AddMovie])
}
const [Rate,setRate] = useState(1);
return (
<div className="App">
<Filter isRating={false} Rates={Rate} setRate={setRate}/>
 <AddMovie add={add}  />
 <Navbar inputs={inputSearch} setInput={setinputSearch} />
 <MovieList movie={movies} inputSearch={inputSearch} rating={Rate} />
 </div>
);
}
export default App;


