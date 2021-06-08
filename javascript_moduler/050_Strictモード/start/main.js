// strictモード
// JavaScriptの書き方を一部制限する
// 目的
// ①意図しないバグの混入
// ②予約後の確保
// ③コードのセキュア化
// strictモードでの開発が望ましい

// ①
// "use strict";
a = 0;
console.log(a);

// ②将来JSにて使われるかもしれないワードの使用時にエラーが出る
// const implements, package, interface

// ③thisでwindowオブジェクトがundefinedとなる など(安易なwindowオブジェクトの変更を防ぐため)

function fn() {
  "use strict";
  return this;
}
console.log(fn());
