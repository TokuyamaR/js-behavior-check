function sleep(callback, val) {
  setTimeout(() => {
    console.log(val++);
    callback(val);
  }, 1000);
}

// callback関数で非同期処理のチェーンを行うのは可読性が下がり実装としてよくない
// es6でPromiseが実装されたのでそちらを利用する
sleep((val) => {
  sleep((val) => {
    sleep((val) => {
      sleep((val) => {
        sleep((val) => {
          sleep((val) => {}, val);
        }, val);
      }, val);
    }, val);
  }, val);
}, 0);
