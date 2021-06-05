function a() {
  setTimeout(() => {
    console.log("setTimeout done ");
    b();
  });
  console.log("task a done");
}

function b() {
  console.log("task b done");
}

a();

// b();
