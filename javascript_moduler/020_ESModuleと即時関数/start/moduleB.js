import { publicVal as val, publicFn as fn } from "./moduleA.js";
fn();
console.log(val.prop++);
console.log(val.prop++);
fn();
