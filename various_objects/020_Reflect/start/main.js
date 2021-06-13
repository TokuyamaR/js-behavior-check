//　ポイント：Reflectは、JSエンジンの汎用的な関数を呼び出すメソッドが格納されているオブジェクト
// -> 内部のメソッドに直接アクセスできる手段としてReflectがある(従来defineProprty)
// 目的
// ①内部メソッドを呼び出す関数の格納場所
// ②Proxyと合わせて使用する

class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
console.log(obj1);
// よく使用する演算子を関数で表記できる
// 例１
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);
// 例２
console.log("a" in obj1);
console.log(Reflect.has(obj1, "a"));

const bob = {
  name: "Bob",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: "Tom",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this);
    return this._hello();
  },
};

tom.hello;
Reflect.get(tom, "goodbye", bob);
