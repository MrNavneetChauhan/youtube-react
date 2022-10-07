const connect = require("./db");
const app = require("../index");
const port = process.env.PORT || 2022;
app.listen(port, async () => {
  await connect();
  console.log(`server connected to the port ${port}`)
});
