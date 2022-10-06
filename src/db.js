import uuid from 'react-uuid';

let db = [
  {id: uuid(), completed: false, value: 'My name is Giovanni Giorgio'},
  {id: uuid(), completed: false, value: 'But everybody calls me Giorgio'},
  {id: uuid(), completed: false, value: 'Lorem ipsum dolor sit amet'}
];

if (localStorage.getItem('notesArray')) {
  db = JSON.parse(localStorage.getItem('notesArray'));
}

export default db;