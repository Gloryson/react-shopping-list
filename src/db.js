import uuid from 'react-uuid';

let db = [
  {id: uuid(), completed: false, value: 'My name is Giovanni Giorgio'},
  {id: uuid(), completed: false, value: 'but everybody calls me Giorgio'},
  {id: uuid(), completed: false, value: 'Lorem ipsum dolor sit amet'}
];

let hintsArray = ['Кулинария Мне', 'Батон Блю', 'Кулинария Блю', 'Сласти Блю', 'Сыр Блю', 'Колбаса Блю', 'Смесь Льву'];

if (localStorage.getItem('notesArray')) {
  db = JSON.parse(localStorage.getItem('notesArray'));
}

if (localStorage.getItem('hintsArray')) {
  hintsArray = JSON.parse(localStorage.getItem('hintsArray'));
}

export {db, hintsArray};