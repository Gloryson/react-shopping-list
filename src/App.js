import React, { useState } from 'react';
import './App.scss';
import Notes from './components/Notes';
import db from './db';
import uuid from 'react-uuid';




function App () {

  const [notes, setNotes] = useState(db);
  const [inputValue, setInputValue] = useState(``);
  const [classes, setClasses] = useState(['lol', 'off']);
  const [isEdit, setIsEdit] = useState(null);

  function addNote (inputValue) {
    if (isEdit) {
      setNotes(notes.map(note => {
        if (isEdit === note.id) note.value = inputValue;
        return note;
      }))
      setIsEdit(null);
    } else {
      setNotes([...notes, {id: uuid(), completed: false, value: inputValue}]);
    }
    setClasses(['lol', 'off']);
    setInputValue(``);
  }

  function editNote (id, value) {
    setClasses(['lol']);
    setIsEdit(id);
    setInputValue(value);
  }

  function addNoteButton () {
    setClasses(['lol'])
  }

  return <>
    <Notes
      notes = {notes}
      setNotes = {setNotes}
      inputValue = {inputValue}
      setInputValue = {setInputValue}
      editNote = {editNote}
    />
    <div className={classes.join` `}>
      <input value={inputValue} onChange={event => setInputValue(event.target.value)}></input>
      <button onClick={() => addNote(inputValue)}>GO</button>
    </div>
    <button onClick={() => addNoteButton()}>+</button>
  </>
}

export default App;
