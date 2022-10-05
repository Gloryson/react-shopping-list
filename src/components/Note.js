import React from "react";
import './Note.scss';



function Note ({completeNote, value, id, completed, deleteNote}) {

  let classes = ['note__value'];

  if (completed) {
    classes = ['note__value', 'done'];
  }

  return <>
    <div className={"note"}>
      <div className={classes.join` `} onClick={() => completeNote(id)}>{value}</div>
      <div className="note__edit"></div>
      <div className="note__delete" onClick={() => deleteNote(id)}></div>
    </div>
  </>
}

export default Note;