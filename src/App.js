import React, { useState } from 'react';
import './App.scss';
import App2 from './App2';
import array from './db/db';




function App() {
  const [arr, setArr] = useState(array);

  function gg () {
    setArr(arr.map(e => ++e))
  }

  return (
    <>
    <button onClick={() => alert(arr)}>111</button>
    <div>222</div>
      <App2 gg = {gg} arr = {arr}/>
    </>
  );
}

export default App;
