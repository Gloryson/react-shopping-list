import React from "react";
import './Note.scss';



function Note ({value, id}) {

  let classes = ['note__value'];

  function ggg () {
    if (classes.length > 1) classes = [...classes[0]];
    else classes = [...classes, 'done'];
  }

  return <>
    <div className={"note"}>
      <div className={classes.join` `}>{value}</div>
      <div className="note__edit"></div>
      <div className="note__delete" onClick={ggg}></div>
    </div>
  </>
}

export default Note;