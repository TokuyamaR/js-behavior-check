// クラスの中ではデフォルトでstrict modeとなる
function fn() {
  return this;
}
console.log(fn());
class C {
  constructor() {
    function fn() {
      return this;
    }
    console.log(fn());
  }

  method() {
    function fn() {
      return this;
    }
    console.log(fn());
  }
}

const c = new C();
c.method();
