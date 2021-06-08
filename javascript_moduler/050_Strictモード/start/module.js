// strictモード
// JavaScriptの書き方を一部制限する
// 目的
// ①意図しないバグの混入
// ②予約後の確保
// ③コードのセキュア化

function fn() {
  // moduleではデフォルトでstrictモードとなる
  a = 0;
}
fn();
console.log(a);
