import { Person } from "./person.js";

const tim = new Person("Tim", 23);
const bob = new Person("Bob", 29);
tim.hello();
bob.hello();
// _nameは外部からアクセスできないプライベート変数とするよう明示されている
// しかし、現在のままではアクセスできてしまう
// -> WeakMapで外部からアクセスできないようにする
console.log(tim._name);
