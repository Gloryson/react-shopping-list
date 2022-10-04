import React from 'react';
import './App.scss';
import Item from './Item';
import db from './db';




function App() {

  

  return (
    <div className='container'>
      <Item db = {db}/>
    </div>
  )
}

export default App;
