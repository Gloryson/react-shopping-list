import React from "react";
import Note from "./Note";
import './Notes.scss';




function Notes ({completeNote, deleteNote, notes, editNote}) {

  return <>
    <div className="notes">
      {notes.map(note => {
        return <Note
        key = {note.id}
        value = {note.value}
        id = {note.id}
        completed = {note.completed}
        completeNote = {completeNote}
        deleteNote = {deleteNote}
        editNote = {editNote}
        />
      })}
    </div>
  </>
}

export default Notes;