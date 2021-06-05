// POINT: 非同期処理は、一時的にメインスレッドから切り離された処理

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log("sleep done");
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("button clicked");
});

// setTimeoutによってsleepが2000msの間メインスレッドから切り離される(非同期処理)
// そのため、メインスレッドに空きができるため、クリックなどのイベントが実行可能
setTimeout(function () {
  sleep(3000);
}, 2000);
