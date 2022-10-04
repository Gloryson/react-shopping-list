import React, { useState } from 'react';

function App2({gg, arr}) {

  return (
    <button onClick={() => {
      gg(); 
      alert(arr)}}
      >
      GOGOGO
    </button>
  );
}

export default App2;