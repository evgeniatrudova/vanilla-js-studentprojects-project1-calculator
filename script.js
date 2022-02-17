      function sin(){
      document.calculator.result.value=Math.sin(document.calculator.result.value);
      }
      function cos(){
      document.calculator.result.value=Math.cos(document.calculator.result.value);
      }
      function tan(){
      document.calculator.result.value=Math.tan(document.calculator.result.value);
      }
      function BACKSPC(){
         let a = document.calculator.result.value;
         document.calculator.result.value = a.substr(0, a.length-1);    
      }
      function square (){
      document.calculator.result.value=Math.sin(document.calculator.result.value, 2);
      }
      function qubbed(){
      document.calculator.result.value=Math.pow(document.calculator.result.value, 3);
      }
      function sqrt2 (){
      document.calculator.result.value=Math.pow(document.calculator.result.value, 1/2);
      }
      function number(value){
      document.calculator.result.value += value;
      }
      function remv(){
      document.calculator.result.value = "  ";
      }
      function equal(){
      document.calculator.result.value= eval(document.calculator.result.value);
      }
  
// Promises;  Telling what happens; and what to do if success or fail.
// Used to download images from service with call backs
//let p = new Promise ((resolve, reject)=>{
//     let a = 1 + 1
//     if(a==2) {resolve('Success')} 
//     else {reject ('Failed')}
//    })
// p.then((message)=>{
//     console.log('This is in the .then' + message)
//   })
//.catch((message) => {
//     console.log('This is in the catch' + message)
//   })


// Promises are not using callbacks in function
function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}
watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})







