const git = require('nodegit')
const {isRepo} = require("@dendronhq/engine-server")

async function proto() {
    let fpath = "/tmp/foo";
    try {
      await isRepo(fpath);
    } catch(err) {
      console.log("foudn issue");
      console.log(JSON.stringify(err));
      return;
    }
}

async function main() {
  await proto();
  console.log("done1");
}

main();
