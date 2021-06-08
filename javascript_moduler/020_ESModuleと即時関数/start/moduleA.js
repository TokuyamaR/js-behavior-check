console.log("ESmodule called");

export let publicVal = { prop: 10 };

export function publicFn() {
  console.log("publicFn called: " + publicVal);
}
