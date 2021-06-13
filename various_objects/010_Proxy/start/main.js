// ポイント：proxy
// プロパティーの操作に独自の処理を追加するためのオブジェクト

const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set] ${prop}`);
    target[prop] = value;
  },
  get: function (target, prop, receiver) {
    console.log(`[get] ${prop}`);
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return -1;
    }
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete] ${prop}`);
    delete target[prop];
  },
};

const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
console.log(pxy);
delete pxy.a;
console.log(pxy);
