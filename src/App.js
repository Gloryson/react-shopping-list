import React, { useState, useEffect } from 'react';
import './index.scss';
import {db, hintsArray} from './db';
import Notes from './components/Notes';
import Modal from './components/Modal';
import uuid from 'react-uuid';




function App () {

  const [notes, setNotes] = useState(db);
  const [inputValue, setInputValue] = useState(``);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('notesArray', JSON.stringify(notes));
    localStorage.setItem('hintsArray', JSON.stringify(hintsArray));
  }, [notes]);

  function addNote (inputValue) {
    if (isEdit) {
      setNotes(notes.map(note => {
        if (isEdit === note.id && inputValue) note.value = inputValue;
        return note;
      }))
      setIsEdit(null);
    } else {
      if (inputValue) {
        setNotes([...notes, {id: uuid(), completed: false, value: inputValue}]);
        if (!hintsArray.includes(inputValue)) hintsArray.push(inputValue);
      }
    }
    setVisible(false);
    setInputValue(``);
  }

  function editNote (id, value) {
    setVisible(true);
    setIsEdit(id);
    setInputValue(value);
  }
  
  return (
    <div className='container'>
      <Notes
        notes = {notes}
        setNotes = {setNotes}
        inputValue = {inputValue}
        setInputValue = {setInputValue}
        editNote = {editNote}
      />
      <div className='add__button' onClick={() => setVisible(true)}></div>
      <Modal
        addNote={addNote}
        inputValue={inputValue}
        setInputValue={setInputValue}
        visible={visible}
      />
    </div>
  )
}

export default App;
