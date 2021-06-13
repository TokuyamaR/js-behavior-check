const arry = [1, 2, 3, 4, 5];

// arry.forEach((v, i, arry) => {
//   console.log(v);
//   console.log(i);
// });

// map　渡ってきた配列を元に新しい配列を作成する
const newArry = arry.map((v, i, arry) => {
  console.log(v);
  return 2 * v;
});

console.log(arry, newArry);

// filter 渡ってきた配列の要素でtruthyな要素をだけで配列を再生成する

const filterArry = arry.filter((v, i, arry) => {
  console.log(v);
  return i >= 1;
});

console.log(arry, filterArry);
