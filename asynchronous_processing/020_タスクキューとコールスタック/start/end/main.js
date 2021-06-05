// POINT: メインスレッドが占有されている状態 = コールスタックにコンテキストが積まれている状態
// 積まれている状態では、その他のコンテキストはタスクキューで処理待ちの状態となり
// コールスタックが空くと、FIFOでタスクキューのタスクが順番に処理される

const btn = document.querySelector("button");
btn.addEventListener("click", function task2() {
  console.log("task2 done");
});

function a() {
  setTimeout(() => {
    console.log("task1 done");
  }, 4000);

  const startTime = new Date();
  while (new Date() - startTime < 5000);

  console.log("fn a done");
}
a();

// 関数aが実行され、コールスタックにて５秒間待機。同時にsetTImeoutが4秒街の状態となる
// クリックを実行すると、コールスタックにすでにコンテキストがあるため、タスクキューに最初にクリックイベントが積まれる
// aが実行されて4秒後にsetTimeoutが実行され、クリックイベントの次のタスクとしてタスクキューに追加される
// 5秒経つと、コールスタックにあった関数aがなくなり、タスクキューのタスクが順に処理される
