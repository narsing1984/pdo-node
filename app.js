const apis = require("./config/api-config");
require("babel-core/register");
require("babel-polyfill");
const PORT = 5000;

apis.app.listen(process.env.PORT || PORT, function () {
  console.log("server connected to port " + PORT);
});
