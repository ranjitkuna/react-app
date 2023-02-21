import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from "react"




function App() {
  let [newdata, setnewdata] = useState([])
async function myfun(){
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
   
      setnewdata(data);
      console.log(data[0]);
  
  })
  .catch(error => console.error(error));
}
 
   
    
  
  
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
  //    console.log(res.data[0].body)
  //   }).catch(err=>{
  //    console.log(err)
  //   })
   
  //  }, [])
  return (
    <div className="App">
      <h1>this is heading</h1>

    <button onClick={myfun}>click</button>
   
       
    </div>
  );
}

export default App;
