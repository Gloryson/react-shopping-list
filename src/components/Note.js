import React from "react";
import './Note.scss';



function Note ({value, id, completed, completeNote, deleteNote, editNote}) {

  let classes = completed ? ['note__value', 'done'] : ['note__value'];

  return <>
    <div className={"note"}>
      <div className={classes.join` `} onClick={() => completeNote(id)}>{value}</div>
      <div className="note__edit" onClick={() => editNote(id, value)}></div>
      <div className="note__delete" onClick={() => deleteNote(id)}></div>
    </div>
  </>
}

export default Note;