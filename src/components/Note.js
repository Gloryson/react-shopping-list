import React from "react";
import '../index.scss';



function Note ({value, id, completed, deleted, completeNote, deleteNote, editNote}) {

  return <>
    <div className={deleted ? 'note out' : 'note'}>
      <div className={completed ? 'note__value note__done' : 'note__value'} onClick={() => completeNote(id)}>{value}</div>
      <div className="note__edit" onClick={() => editNote(id, value)}></div>
      <div className="note__delete" onClick={() => deleteNote(id)}></div>
    </div>
  </>
}

export default Note;