import "./moduleA.js";

// モジュール今季テストでは、thisはundefinedとなる
console.log(this);

function fn() {
  console.log(this);
}
fn();

// オブジェクトは参照できる
const obj = {
  fn,
};

obj.fn();

// windowオブジェクトはグローバル同様取得可能
console.log(window);

// moduleAからの呼び出し
// windowオブジェクト経由なら可能(スコープの考え方から外れるので行わない)
console.log(window.b);
// exportしていないため呼び出せない
console.log(a);
