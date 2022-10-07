import React from "react";
import Note from "./Note";
import '../index.scss';




function Notes ({notes, setNotes, editNote}) {


  
  function completeNote (id) {
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.completed = note.completed ? false : true;
      }
      return note;
    }))
  }



  function deleteNote (id) {
    setNotes(notes.map(note => {
      if (note.id === id) note.deleted = true;
      return note;
    }))
    setTimeout(() => {
      setNotes(notes.filter(note => note.id != id));
    }, 300);
  }



  return <>
    <div className="notes">
      {notes.map(note => {
        return <Note
        key = {note.id}
        value = {note.value}
        id = {note.id}
        completed = {note.completed}
        deleted = {note.deleted}
        completeNote = {completeNote}
        deleteNote = {deleteNote}
        editNote = {editNote}
        />
      })}
    </div>
  </>
}

export default Notes;