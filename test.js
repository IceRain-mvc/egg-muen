// try {
//   console.log(1);
//   setTimeout(()=>{
//     console.log(2);
//     throw new Error(3);
//   },0)
// }catch (e) {
//   console.log(e);
// }
var fn = function(){
  alert("fn()函数被执行了");
  setTimeout(fn, 1000)
}

fn();


var fn2 = function(n1, n2, n3) {
  if (n1 < 10) {

  }

};
