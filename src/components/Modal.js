import React from "react";
import '../index.scss';


function Modal ({addNote, inputValue, setInputValue, visible}) {

  return <>
    <div className={visible ? 'modal__window' : 'modal__window  off'}>
      <input value={inputValue} onChange={event => setInputValue(event.target.value)} ref={input => input && input.focus()}></input>
      <div className="ok__button" onClick={() => addNote(inputValue)}>OK</div>
    </div>
  </>
}

export default Modal;
