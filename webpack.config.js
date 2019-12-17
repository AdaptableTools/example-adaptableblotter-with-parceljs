const path = require("path");

module.exports = {
  entry: "./ab.js",
  output: {
    path: path.resolve(__dirname, "minified"),
    filename: "ab.js"
  },
  externals: [
    {
      "ag-grid-community": "agGrid",
      "ag-grid-enterprise": "agGrid"
    }
  ]
};
