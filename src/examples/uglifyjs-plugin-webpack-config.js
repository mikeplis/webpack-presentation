const code = `
// webpack.config.js
const path = require('path');
+ const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
    entry: "./main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
+    optimization: {
+        minimizer: [
+            new UglifyJsPlugin()
+        ]
+    }
}

module.exports = config;
`;

export default code.trim();
