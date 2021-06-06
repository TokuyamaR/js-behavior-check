/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 *
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 *
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 *
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 *
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 *
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 *
 * ※await/asyncで記述してみてください。
 */
async function myFetch(fileName) {
  const response = await fetch(`../json/${fileName}`);
  const json = await response.json();
  return json;
}

async function fetchUser1() {
  try {
    const user1 = await myFetch("user1.json");
    console.log(`--${user1.name}'s timeline--`);
    if (user1.id) {
      return user1;
    } else {
      throw new Error("user1 data not found");
    }
  } catch (e) {
    console.log(e);
  }
}

async function fetchFriendsIds(userId) {
  try {
    const userIds = await myFetch(`friendsOf${userId}.json`);
    if (!userIds.length) {
      return userIds;
    } else {
      throw new Error("friendsIds data not found");
    }
  } catch (e) {
    console.log(e);
  }
}

async function fetchUsers(friendIds) {
  try {
    // 詰まった点：foreachでawaitを使おうとしたらエラーが出たので繰り返し処理の記述ができなかった
    // const userIds = friendIds.friendIds;
    // let user = await myFetch(`user${userIds[0]}.json`);
    // let message = await myFetch(`message${user.latestMsgId}.json`);
    // console.log(`${user.name} says: ${message.message}`);

    // user = await myFetch(`user${userIds[1]}.json`);
    // message = await myFetch(`message${user.latestMsgId}.json`);
    // console.log(`${user.name} says: ${message.message}`);

    // user = await myFetch(`user${userIds[2]}.json`);
    // message = await myFetch(`message${user.latestMsgId}.json`);
    // console.log(`${user.name} says: ${message.message}`);

    // user = await myFetch(`user${userIds[3]}.json`);
    // message = await myFetch(`message${user.latestMsgId}.json`);
    // console.log(`${user.name} says: ${message.message}`);

    // リファクタリング
    // ①Setオブジェクトの活用
    // ②Promise.all()
    const userList = new Set();
    for (const id of friendIds.friendIds) {
      userList.add(myFetch(`user${id}.json`));
    }
    const users = await Promise.all(userList);

    const messagaList = new Set();
    for (const user of users) {
      messagaList.add(myFetch(`message${user.latestMsgId}.json`));
    }
    const messages = await Promise.all(messagaList);

    for (const user of users) {
      for (const message of messages) {
        if (user.id === message.userId) {
          console.log(`${user.name} says: ${message.message}`);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

fetchUser1()
  .then((user1) => fetchFriendsIds(user1.id))
  .then((userIds) => fetchUsers(userIds));
