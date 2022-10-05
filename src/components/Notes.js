import React from "react";
import Note from "./Note";
import './Notes.scss';



function Notes ({notes}) {

  return <>
    <div className="notes">
      {notes.map((e, i) => {
        return <Note value = {e} id = {i}/>;
      })}
    </div>
  </>
}

export default Notes;