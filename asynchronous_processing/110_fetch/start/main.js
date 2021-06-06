// fetch の戻り値はPromiseが返る
// fetchでjsonデータを取得する場合は、responseに対してjsonメソッドを利用することで取得できる
fetch("./users.json", {
  headers: {
    "Access-Control-Allow-Origin": "origin",
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    for (const user of json) {
      console.log(`I'm a ${user.name}, ${user.age} years old.`);
    }
  });

// await/asyncで書き換えた場合
async function fetchUsers() {
  const response = await fetch("users.json");
  const json = response.json();
  for (const user of json) {
    console.log(`I'm a ${user.name}, ${user.age} years old.`);
  }
}

fetchUsers();
