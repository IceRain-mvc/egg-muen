try {
  console.log(1);
  setTimeout(()=>{
    console.log(2);
    throw new Error(3);
  },0)
}catch (e) {
  console.log(e);
}
