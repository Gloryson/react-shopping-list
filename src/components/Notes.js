import React from "react";
import Note from "./Note";
import './Notes.scss';



function Notes () {


  return <>
    <div className="notes">
      <Note/>
      <Note/>
      <Note/>
    </div>
  </>
}

export default Notes;