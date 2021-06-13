// ポイント：Storage
// ブラウザの保存領域に「データを格納する」ためのオブジェクト

const obj = { a: 0, b: 1, c: 2 };
const json = JSON.stringify(obj);
localStorage.setItem("key", json);
localStorage.setItem("key2", "1");
const result = localStorage.getItem("key");
const obj2 = JSON.parse(result);
console.log(obj2);
console.log("end");

// localStrageは同期的な処理のため、resultの後に出力される
