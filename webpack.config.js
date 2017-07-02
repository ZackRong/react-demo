/**
 * Created by rongzhx on 2017/7/2.
 */
var path = require('path');
var webpack = require('webpack');


var config = {
    entry:{
        main:'./main.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'[name].js',
        publicPath:'/assets/'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:"babel-loader",
                query:{
                    presets:['es2015', 'react']
                }
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(sass|scss)/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    }
};

module.exports = config;