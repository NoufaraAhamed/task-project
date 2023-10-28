
import { useEffect, useState } from 'react';
import './App.css';
import Mainsection from './components/Mainsection/Mainsection';
import Navbar from './components/Navbar/Navbar';
import  axios from 'axios'

function App() {
  const [items , setItems] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/getItems')
    .then(items=>setItems(items.data))
    .catch(err=> console.log(err))
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Mainsection items={items}/>
    </div>
  );
}

export default App;
