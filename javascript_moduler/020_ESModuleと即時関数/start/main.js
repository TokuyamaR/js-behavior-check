const moduleA = (function () {
  console.log("IIFE called");

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log("publicFn called: " + publicVal);
  }

  function privateFn() {}

  return {
    publicFn,
    publicVal,
  };
})();

const moduleB = (function ({ publicFn: fn, publicVal: val }) {
  fn();
  console.log(val++);
  console.log(val++);
  fn();
})(moduleA);
