import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import axios from 'axios'




function App() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
     console.log(res.data[0].body)
    }).catch(err=>{
     console.log(err)
    })
   
   }, [])
  return (
    <div className="App">
      <h1>this is heading</h1>
    </div>
  );
}

export default App;
