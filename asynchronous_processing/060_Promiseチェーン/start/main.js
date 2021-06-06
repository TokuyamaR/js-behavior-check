function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// 非同期の処理を繋げるためには、
// thenメソッドのコールバック関数の戻り値にPromiseのインスタンスが必要
// もしない場合はチェーンが切れてしまい、非同期処理でなく通常の動機処理が走ってしまう
sleep(0)
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    // 下記のコメントアウトの処理を行うと、非同期処理でないことを確認できる
    // sleep(val);
    // return val;
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  })
  .then(function (val) {
    return sleep(val);
  });
