import React, { useState, useContext, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import TextEditor from './Component/text-editor';
import Home from './Component/Home/index'
// const myContext = createContext('');

function App() {
  
  // const [counter, setCounter] = useState('0');
  
  // const getData = (data)=>{
  //   console.log(data)
  // }
  return (
      <TextEditor />
      // <myContext.provider value={counter}>
      //   <Home getData={getData}/>
      // </myContext.provider>
        // <Home/>
      
  );
}

export default App;