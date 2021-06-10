// import { publicFn, publicVal } from "./moduleA.js";
// console.log(publicVal);
// console.log(publicFn());

// ダイナミックインポートで非同期で必要な時に直接exportしたものを呼び出せる
// import("./moduleA.js").then(function (modules) {
//   // modulesでexportしたものがオブジェクトとして渡ってくる
//   console.log(modules);
//   modules.publicFn();
// });

// ダイナミックインポートは非同期のためPromiseオブジェクトが返ってくることを利用して
// async/awaitでも書ける
async function fn() {
  const modules = await import("./moduleA.js");
  modules.publicFn();
}

fn();
