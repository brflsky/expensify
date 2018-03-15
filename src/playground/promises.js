const promise = new Promise((resolve, reject) => {
  resolve('hi from porimse');
});

promise.then((data) => {
  console.log(data);
});
