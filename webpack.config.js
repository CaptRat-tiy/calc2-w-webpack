module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  watch: true,
  devtool: "source-map",
}
