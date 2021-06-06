// await/async
// Promiseをさらに直感的に書けるようにしたもの
// async
// Promiseを返却する関数の宣言を行う(必ずPromiseが返ってくることが担保される
// => Promiseを返す
// await
// Promiseを返却する関数の非同期処理が完了するまで待つ
// => Promiseのインスタンスを受ける

function sleep(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  console.log(val);
}

init();
