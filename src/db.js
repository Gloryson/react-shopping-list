let db = [1,2,3,4,5,6,7,8,9];

if (localStorage.getItem('arrrr')) {
  db = JSON.parse(localStorage.getItem('arrrr'));
}

export default db;