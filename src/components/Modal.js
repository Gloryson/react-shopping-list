import React, { useState, useEffect } from "react";
import '../index.scss';
import {hintsArray} from '../db';
import uuid from 'react-uuid';


function Modal ({addNote, inputValue, setInputValue, visible}) {

  const [hints, setHints] = useState(hintsArray.slice(0, 4));

  function generateHints (value) {
    setInputValue(value);
    let temp = [...hintsArray].filter(hint => hint.toLowerCase().startsWith(value.toLowerCase()));
    setHints(temp.length > 4 ? temp.slice(0, 4) : temp);
  }
 
  return <>
    <div className={visible ? 'modal__window' : 'modal__window  off'}>
      <div className="hints">
        {hints.map(hint => {
          return <div className="hint" key={uuid()} onClick={() => setInputValue(hint)}>{hint}?</div>;
        })}
      </div>
      <input value={inputValue} onChange={event => generateHints(event.target.value)} ref={input => input && input.focus()}></input>
      <div className="ok__button" onClick={() => addNote(inputValue)}>OK</div>
    </div>
  </>
}

export default Modal;
