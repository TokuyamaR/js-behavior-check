const arry = [1, 2, 3, 4, 5];

// reduce 配列の要素を一つずつ取り出して、単一の出力値を生成する
// 第２引数で初期値を設定できる
const reduceArry = arry.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr * 2;
}, 0);

console.log(reduceArry);
