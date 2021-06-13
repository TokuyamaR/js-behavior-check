const arry = [1, 2, 3, 4, 5];
// pop 最後に要素を追加
arry.push(6);
console.log(arry);
// pop 最後の要素を削除
let result = arry.pop();
console.log(arry, result);
// shift 最初の要素を削除
result = arry.shift();
console.log(arry, result);
// 先頭に要素を追加
result = arry.unshift(1);
console.log(arry, result);
// splice 指定した長さだけ要素を切り取り。また第３引数以降で切り取られた箇所に要素を追加
result = arry.splice(0, 3, 1, 2);
console.log(arry, result);
// concat 配列の結合
// ES6からは三点ドットで結合も可能
const arry2 = arry.concat([6, 7, 8]);
const arry3 = [0, ...arry, 10, 11, 12];
console.log(arry2);
console.log(arry3);
