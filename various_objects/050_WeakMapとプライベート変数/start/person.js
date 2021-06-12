// WeakMapを使うメリット
// ①外部から_nameにアクセスできないようにする
// ②インスタンス化されたオブジェクトごとに操作が可能(値を取り出すなど)
const wm = new WeakMap();
export class Person {
  constructor(name, age) {
    // this._name = name;

    // wmはexportされていないため、外部からアクセスできない
    // (main.jsからの呼び出しはundefinedとなる)
    wm.set(this, {
      name,
    });
  }

  hello() {
    console.log(`hello ${wm.get(this).name}`);
  }
}
