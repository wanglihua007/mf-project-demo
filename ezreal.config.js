const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = (webpack) => ({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "app1",
      remotes: {
        app2: "app2@[app1Url]/chip.js",
      },
      // shared: {
      //   react: {
      //     singleton: true,
      //     requiredVersion: deps.react,
      //   },
      //   "react-dom": {
      //     singleton: true,
      //     requiredVersion: deps["react-dom"],
      //   },
      // },
    }),
  ],
});
