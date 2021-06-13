const obj = { a: 0, b: 1, c: 2 };

// stringfy obj -> JSONへ変換
// const json = JSON.stringify(obj);
function replacer(prop, value) {
  console.log(value);
  if (value < 1) {
    return;
  }
  return value;
}
// const json = JSON.stringify(obj, replacer);
const json = JSON.stringify(obj, ["a", "b"]);
console.log(json);

const obj2 = JSON.parse(json);
console.log(obj2);
