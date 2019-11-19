const app = require("./app.js");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Big old backend running on port ${port}`);
});
