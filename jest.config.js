module.exports = {
    transformIgnorePatterns: [
      "node_modules/(?!axios|react-router-dom)"
    ],
    moduleNameMapper: {
      "^react-router-dom$": require.resolve("react-router-dom")
    },
  };
  