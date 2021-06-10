// 通常のexportでは{}で囲んで使用する値や関数をimport
// defualtがついてexportされたものは{}なしでimportでき、名前も好きなものを定義できる
import defaultVal, { publicVal, publicFn } from "./moduleA.js";

console.log(publicVal);
publicFn();

console.log(defaultVal);
