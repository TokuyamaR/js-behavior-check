// POINT: Promiseとは非同期処理をより簡単に、可読性が上がるように書けるようにしたもの

new Promise(function (resolve, reject) {
  console.log("promise");
  // resolve("data");
  setTimeout(function () {
    reject("hello");
  }, 1000);
})
  .then(function (data) {
    console.log("then : " + data);
    return data;
  })
  .then(function (data) {
    console.log("then : " + data);
  })
  .catch(function (data) {
    console.log("catch : " + data);
  })
  .finally(function () {
    console.log("finally");
  });

console.log("global end");
