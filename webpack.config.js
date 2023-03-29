const path = require("path");
const webpack = require("webpack");

module.exports = {
  // ... other configuration options ...
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      // add any other fallback modules that you need
    },
  },
  // ... other configuration options ...
};
