import React, { useState } from 'react';
import array from './db/db';

function App2({gg, arr}) {

  return (
    <button onClick={() => {
      array[0]++; 
      alert(array)}}
      >
      GOGOGO
    </button>
  );
}

export default App2;