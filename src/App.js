import React, { useState, useEffect } from 'react';
import './App.scss';
import Item from './Item';
import db from './db';




function App() {

  const [arr, setArr] = useState(db);

  function addItem () {
    setArr([...arr, arr[arr.length - 1] + 1]);
  }

  React.useEffect(() => {
    localStorage.setItem('arrrr', JSON.stringify(arr))
  }, [arr]);

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
