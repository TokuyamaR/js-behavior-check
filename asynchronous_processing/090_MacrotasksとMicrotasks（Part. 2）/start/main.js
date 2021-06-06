// 非同期(マイクロタスク)
new Promise(function (resolve) {
  // ①
  console.log("promise");

  // ③非同期(マクロタスク)
  setTimeout(function task1() {
    console.log("task1");
    resolve();
  });
})
  .then(function job1() {
    // ④
    console.log("job1");

    // マイクロタスクのため、job2, job3のマクロタスクが捌けるまで実行を待つ
    setTimeout(function task2() {
      // ⑦
      console.log("task2 ");

      // ⑧
      queueMicrotask(function task3() {
        console.log("task3");
      });
    });
  })
  .then(function job2() {
    // ⑤
    console.log("job2");
  })
  .then(function job3() {
    // ⑥
    console.log("job3");
  });

// ②
console.log("global end");
