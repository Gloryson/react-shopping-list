import React, { useState } from 'react';
import './App.scss';
import Notes from './components/Notes';
import db from './db';




function App () {

  const [notes, setNotes] = useState(db);

  return <>
    <Notes notes = {notes}/>
  </>
}

export default App;
