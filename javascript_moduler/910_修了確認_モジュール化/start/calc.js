/**
 * 問題：
 * 以下の即時関数をモジュール化してください。
 * ※calcオブジェクトはmain.js内で行い、実行してください。
 */

// main.jsでの呼び出され方を確認し、関数からobjectに変更する
// valはプライベート変数としたいため、export外に出す
let val = 0;
export const calc = {
  plus: function (target) {
    const newVal = val + target;
    console.log(`${val} + ${target} = ${newVal}`);
    val = newVal;
  },
  minus: function (target) {
    const newVal = val - target;
    console.log(`${val} - ${target} = ${newVal}`);
    val = newVal;
  },
  multiply: function (target) {
    const newVal = val * target;
    console.log(`${val} x ${target} = ${newVal}`);
    val = newVal;
  },
  divide: function (target) {
    const newVal = val / target;
    console.log(`${val} / ${target} = ${newVal}`);
    val = newVal;
  },
};
