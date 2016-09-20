# webpack-react-weui-vs
### react微信开发模板

* **集成vs环境**
* **es6**
* **reactweui**
* **react热插拔**
* **htmltemplate**

# get started
* 依赖webpack,如没有安装,npm install -g webpack webpack-dev-server
* **npm run dev** 在本地8080端口起测试服务,引用的所有文件都在内存，不在硬盘上，更新速度飞快
* **npm run online** 在硬盘上生成online.config.js中指定的ROOT文件夹，直接发布ROOT包即可
## 如果在VS环境下：

* 直接点击debug按钮，会自动运行npm run dev

# 说明


### 目录结构

```
├── .vscode                      
|    ├── lanch.json               # debug环境所需文件
|    ├── setting.json             # vs环境配置文件
|    └── task.json                # task，可以把npm run dev等命令集成进去
├── jsconfig.json                 # 智能提示引入的外部类中的方法，变量
├── typings.json                  # 通过node_moudles引入的比如react，需要typings才会有提示
|
├── online.config.js              # 上线配置文件，运行npm run online
├── webpack.config.js             # 开发配置文件,npm run dev
├── rem.template.handlebars       # 雪碧图生成模板
└── src
    ├── css
    |	├── base
    |   |   ├── global.less       # 可放全局less样式，比如.abs()
    |   |   └── reset.css         # reset.css
    |   |
    |	├── page                  # 对应某页的css
    |   |   └── buttonTest.less   # button页样式
	|	├── index.less            # index页样式
	|	└── sprite.less           # 雪碧图生成的样式
	|
	├── js
	|	├── page                  # 存放各页面
	|   |	├── home              # home页js
    |   |   ├── buttonTest.js     # button页js
    |   |   └── cell.js           # cell页js
    |   |
    |	└── tools                 # 工具页
    |       ├── page.js           # 上述各页面都有共用的样式和结构，page.js单独提出来
    |       └── page.less         # 与page.js对应的样式  
	|
	├── img
	|	├── sprites               # 所有需要生成雪图的都可放在这
	|   |	├── a.png             
    |   |   └── b.png   
    |   |       
	|   └── sprite.png            #webpack执行后会把sprites中的图片生成一张雪碧图sprite.png
	|
	└── view
		├── index.html            # 主html,所有react的逻辑全在index.html里
		├── loading.html          # loading板块的代码，含有自适应、预加载代码
		└── statistics.html       # 所有的统计代码块

```

### 功能
#### html模块化

参考上面目录结构，

* loading.html指loading代码的模块，运行时index.html会插入loading.html中的内容，详细配置见hmtl-yu-plugin
* statistics.html指统计代码的模块，跟loading一样会插入到index.html中，不过是插在body结束标签前，


#### 雪碧图

* 将需要拼接的雪碧图放在img/sprites文件夹下，运行npm run dev后会自动生成sprite.png和sprite.less
* 此后sprites文件夹下的的文件变换会自动更改上述文件，意味着切下一张小图后，可以直接在less中引用，**且不用在less里写图的宽高，地址**
* sprite.less中的单位依然为px,rem.template.handlebars这个模板生成的less会自动设置background-size
* **texture-packer** 除了生成less文件外，还可以生成json文件，类似于texture-packer的功能，而且是自动生成 

#### base64图片处理
* 在js中加载的小图会自动转成base64



---------------------------------------

### 编写代码
* **所有代码均在src下编写**
* **集成有ES6开发环境**


### 调试
* **通过上述文件结构中vs的配置，可在vscode中调试代码**
* **[关于vscode的使用](https://code.visualstudio.com/docs)**
* **vscode界面如下**

<img alt="VS Code in action" src="http://i0.itc.cn/20160920/3649_1f86a622_bacf_bc62_0eac_ccd1ef5dfaa4_1.png">

### 上线
在online.config.js中有如下代码
```javascript
    var ROOT = "yursile/fuckdd/"
	
	output:{
        path: path.join(__dirname,ROOT),
        publicPath: "http://news.sohu.com/upload/"+ROOT,
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
```
* **path:**  会在根目录生成ROOT中指定的目录结构，直接打包上传ROOT目录，(例子中会生成yursile目录)

	如需要index.html单独提出来，直接发布index.html即可，**不用再换里面链接**
* **publicPath**  会把所有的链接地址替换成线上的地址


	
## 关于[hmtl-yu-plugin](https://github.com/yursile/html-yu-plugin)

这个工具可以动态生成css,js甚至html代码块。在webpack plugin配置如下：
```javascript
new HtmlWebpackPlugin({           
    filename:'/view/index.html',  
    template:'./src/view/index.html', 
    inject:true,  //this value must be true
    blockFile:"./src/view/statistics.html", //把这个目录下的代码块放到body结束标签之前，  通常放统计代码
    headBlockFile:"./src/view/loading.html"  //把这个目录下的代码块放到body开始标签之后，通常放loading
})
```
# 更新日志
* **解决windows shell问题**
* **添加底部导航，tab板块**
* **添加实时动态搜索，search板块**
* **添加vs支持**
