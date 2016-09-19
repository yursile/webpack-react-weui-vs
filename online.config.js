var path=require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-yu-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// var DOMAIN = "../../"
// var ROOT = "dist/"
var DOMAIN = "http://news.sohu.com/upload/"
var ROOT = "yursile/fsdafwe/"
module.exports={
	entry:{
    		index:"./src/js/index.js",
    	},
    watch:true,
    output:{
        path: path.join(__dirname,ROOT),
        publicPath:DOMAIN + ROOT,
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
         loaders: [ //加载器
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style", "css-loader?-minimize!postcss!less") //不用rem
                // loader: ExtractTextPlugin.extract("style", "css-loader?-minimize!px2rem?remUnit=100&remPrecision=8!postcss!less")
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'react-hot!jsx!babel?presets[]=es2015,presets[]=react,presets[]=stage-0'
            },
            {
                test: /\.css$/, 
                loader:ExtractTextPlugin.extract("style", "css-loader") 
                // loader:ExtractTextPlugin.extract("style", "css-loader?-minimize","px2rem-loader?remUnit=75&remPrecision=8","postcss") 
            },
            {
                test: /\.html$/, 
                loader: "html" 
            },
            {
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192&name=./img/[name].[ext]'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }),
    	new webpack.ProvidePlugin({	//加载jq
            $: 'jquery'
        }),
        // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vender", /* filename= */"vendor.bundle.js"),
    	new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径
    	new webpack.optimize.UglifyJsPlugin({	//压缩代码
		    compress: {
		        warnings: false
		    },
		    except: ['$super', '$', 'exports', 'require']	//排除关键字
		}),
    	new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
    		// favicon:'./src/img/favicon.ico', //favicon路径
			filename:'/view/index.html',	//生成的html存放路径，相对于 path
			template:'./src/view/index.html',	//html模板路径
			inject:true,	//允许插件修改哪些内容，包括head与body
			// hash:true,	//为静态资源生成hash值
            // heads:['response'],
            // blockFile:"./src/view/statistics.html",
            headBlockFile:"./src/view/loading.html"
		}),
        // new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
    // devServer:{
    // 	contentBase:'./dist/view'
    // }
};
