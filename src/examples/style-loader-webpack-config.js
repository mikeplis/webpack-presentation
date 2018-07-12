const code = `
// webpack.config.js
const path = require('path');

const config = {
    entry: "./main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
+    module: {
+        rules: [
+            {
+                test: /\\.css$/,
+                use: ['style-loader', 'css-loader']
+            }
+        ]
+    }
}

module.exports = config;
`;

export default code.trim();
