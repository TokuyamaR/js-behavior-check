// ポイント：WeakMap
// 弱い山椒でオブジェクトを保持するコレクション
// オブジェクトを削除すると2度と参照できない
// 2度と参照できないオブジェクトを定期的に削除する仕組みを「ガベージコレクション」と呼ぶ

const wm = new WeakMap();

let obj = {};
wm.set(obj, "value");

// obj = null;
console.log(wm.delete(obj));
console.log(wm.get(obj));
