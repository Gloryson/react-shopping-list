import uuid from 'uuid';

let db = [
  {id: uuid(), completed: false, value: 'Lorem ipsum dolor'},
  {id: uuid(), completed: false, value: 'Ipsum dolor lorem'},
  {id: uuid(), completed: false, value: 'Dolor ipsum lorem'},
  {id: uuid(), completed: false, value: 'Dolor sit amet'},
  {id: uuid(), completed: false, value: 'Ipsum dolor sit'}
];

export default db;