import React, { useState } from 'react';
import './App.scss';
import Item from './Item';
import db from './db';




function App() {

  const [arr, setArr] = useState(db);

  function addItem () {
    setArr([...arr, arr[arr.length - 1] + 1]);
  }

  return (
    <>
    <button onClick={addItem}>GO</button>
    <div className='container'>
      <Item arr = {arr}/>
    </div>
    </>
    
  )
}

export default App;
