// マクロタスク
// タスクキューのこと
// マイクロタスク
// タスクキューとは別で存在する非同期処理の待ち行列(ジョブキュー)

// 実行優先順序
// マイクロタスク > マクロタスク
// ジョブの実行の違い
// マイクロ : 順番が回ってきたら全てのタスクを実行
// マクロ : 順番が回ってきたら一つずつタスクを実行(一つ終了した時点でマイクロタスクが追加された場合はそちらに処理が移る)
// 代表的な関数
// マイクロ : Promises, queueMicrotask, MutationObserver ...
// マクロ : setTimeout, setInterval, requestAnimationFrame ...

// ④非同期(マクロタスク)
setTimeout(function () {
  console.log("setTimeout");
});

// 非同期(マイクロタスク)
new Promise(function (resolve) {
  // ①
  console.log("promise");
  resolve();
}).then(function () {
  // ③
  console.log("then");
});

// ②
console.log("global end");
