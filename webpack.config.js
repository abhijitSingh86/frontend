var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production"

module.exports = {
  entry : './src/main/js/app.jsx',
  cache: true,
  mode: 'development',
  output: {
    path : __dirname,
    filename: 'bundle.js'
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  module: {

    rules: [
    {
        test: /\.(jsx|js)$/,
        include : path.join(__dirname , "./"),
        exclude : /(node_modules)/,
        use : [{
            loader : 'babel-loader',
            options: {
                presets : [
                [ '@babel/preset-env',{
                                                      "targets": "defaults"
                                                    }]
                 ,'@babel/preset-react']
            }
        }],resolve: {
                 extensions: ['', '.js', '.jsx'],
               }

    },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
        ],
      },
    ],
  },
};