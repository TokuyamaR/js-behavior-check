// Promiseを用いた非同期処理の並列処理
// Promise.all()を使用
// Promise.all()の引数は反復可能オプジェクト(配列など)を指定する。
// また、オブジェクトにはPromiseのインスタンスを返すことで並列処理が可能となる。

function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function (params) {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}
Promise.all([sleep(2), sleep(3), sleep(4)]).then(function (data) {
  console.log(data);
});

sleep(0)
  .then(function (val) {
    return Promise.all([sleep(2), sleep(3), sleep(4)]);
  })
  .then(function (data) {
    console.log(data);
    return data;
  })
  .then(function (data) {
    console.log(data);
  });

// その他
// Promise.race()
// 並列処理のどれかひとつがおわったら次の処理に移行する
