const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.join(__dirname, "public", "index.html"),
            }
        ),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
       
    },
    module:{
          rules:[
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
           {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
           },
           {
            test: /\.(jpg|png)$/i,
            use: {
                loader: 'file-loader',
               
            },
           },
          ],
          
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
   

};