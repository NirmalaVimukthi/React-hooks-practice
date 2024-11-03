import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  // useState() when data changes re-render the UI



  const componentDidMount = () => {
    //intiakization 
  }

  const componentDidUpdate = () =>{
    //state update  
  }

  const componentWillUnmout= () =>{
    //Destroyed 
  }
const setallval = () =>{
  setCount(count+1); 
   setState(state+1);
}

  useEffect(()=>{
  
    /* 
    const element = document.getElementById('my-name');
       if (element) {
       element.innerHTML = state;
     }

     */

     () => {
      fetch().then(()=>setState(1))
     }

     alert('hello side effect !')

     return () => alert('goodbye component ! ')


  
    })

  return (
    <>
      <h1>Hi Nirmala <span id="my-name">{state}</span></h1>

      <button onClick={()=>setallval()}> click {count}</button>


    </>
  )
}

export default App
