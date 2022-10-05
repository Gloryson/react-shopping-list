import React, { useState } from "react";
import Note from "./Note";
import './Notes.scss';
import db from '../db';



function Notes () {

  const [notes, setNotes] = useState(db);

  function completeNote (id) {
    setNotes(notes.map(note => {
      if (note.id === id) {
        if (note.completed) note.completed = false;
        else note.completed = true;
      }
      return note;
    }))
  }

  function deleteNote (id) {
    setNotes(notes.filter(note => note.id != id));
  }


  return <>
    <div className="notes">
      {notes.map(note => {
        return <Note
        value = {note.value}
        id = {note.id}
        completed = {note.completed}
        completeNote = {completeNote}
        deleteNote = {deleteNote}
        />
      })}
    </div>
  </>
}

export default Notes;