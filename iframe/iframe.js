// Call indexeddb
console.log('loaded iframe')

localStorage.setItem('a', 'b')
console.log(localStorage.getItem('a'))

var request = window.indexedDB.open("MyTestDatabase");

request.onerror = function(event) {
  console.log(request.errorCode)
};
request.onsuccess = function(event) {
  console.log(request.result)
};
