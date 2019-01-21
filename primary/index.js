// REPLACE IFRAME URL HERE
const IFRAME_URL = "http://230242fb.ngrok.io"

  // TEST indexedDB
// var db = new Dexie("count_database");
// db.version(1).stores({
//     counts: 'name,number'
// });

startButton.addEventListener('click', () => {

  // TRY IFRAME
  // console.log('click!')
  // const iframe = document.createElement('iframe')
  // iframe.src = IFRAME_URL
  // iframe.style = 'width:0; height:0; border:0; border:none !important'
  // document.body.appendChild(iframe)

  // TEST LOCAL STORAGE
  // let get = parseInt(localStorage.getItem("count") || 1)
  // localStorage.setItem("count", ++get)
  // countVal.innerHTML = localStorage.getItem("count")

  // TEST indexedDB
  // db.counts.get('counter').then((val) => {
  //   console.log('logging val')
  //   console.log(val.number)
  //   val = val.number
  //
  //   let count = parseInt(val || 1)
  //   count = ++count
  //   countVal.innerHTML = count
  //   return db.counts.put({name:'counter', number: count.toString()})
  // }).catch(function(error) {
  //   console.log(error)
  //     countVal.innerHTML = error
  // });

})
