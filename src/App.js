import React, { useState } from 'react';
import './App.scss';
import Notes from './components/Notes';
import db from './db';
import uuid from 'react-uuid';




function App () {

  const [notes, setNotes] = useState(db);
  const [inputValue, setInputValue] = useState(``);

  function completeNote (id) {
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.completed = note.completed ? false : true;
      }
      return note;
    }))
  }

  const deleteNote = (id) => setNotes(notes.filter(note => note.id != id));

  function addNote (inputValue) {
    let newNote = {id: uuid(), completed: false, value: inputValue}
    setNotes([...notes, newNote]);
    setInputValue(``);
  }

  function editNote (id) {
    setNotes(notes.map(note => {
      if (note.id === id) note.value = inputValue;
      return note;
    }))
    setInputValue(``);
  }

  const changeItem = (event) => setInputValue(event.target.value);

  return <>
    <Notes
      notes = {notes}
      completeNote = {completeNote}
      deleteNote = {deleteNote}
      editNote = {editNote}
    />
    <input value={inputValue} onChange={event => changeItem(event)}></input>
    <button onClick={() => addNote(inputValue)}>GO</button>
  </>
}

export default App;
