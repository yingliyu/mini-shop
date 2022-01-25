### 基于uni-app & Vue2的商城小程序
# 安装
工欲善其事，必先利其器，首先我们需要安装[HbuilderX](https://www.dcloud.io/hbuilderx.html)、[微信小程序开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，根据官方文档的介绍下载安装即可。接下来我们将在HbuilderX中进行编码，在微信小程序开发者工具中运行预览等。
# 新建一个项目
使用HbuildX新建一个项目。
打开Hbuilder->文件->新建->项目
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642664635431-c6a07856-5147-4288-bd09-9f91ebb6626c.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=614&id=u4e133b1d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=614&originWidth=717&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48049&status=done&style=none&taskId=ud8da7683-221b-4710-8d48-76813011485&title=&width=717)
然后点击创建，创建成功，你会看到一个如下的项目目录。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642664682787-a2b20ccd-2e4d-4d7a-a71d-46bed945fc39.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=329&id=u79393cbd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=329&originWidth=279&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10042&status=done&style=none&taskId=uf7273f53-11a6-42bd-b9a2-da399a8c925&title=&width=279)
# 项目目录介绍


`pages` 业务页面文件存放的目录


`components`组件存放目录


`static`存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此


`unpackage`打包目录，存放各个平台的打包文件


`App.vue` 应用配置，用来配置App全局样式以及监听 应用生命周期


`main.js` Vue初始化入口文件


`mainfest.json`配置应用名称、appid、logo、版本等打包信息，[详见](https://uniapp.dcloud.io/collocation/manifest)


`pages.json`配置页面路由、导航条、选项卡等页面类信息，[详见](https://uniapp.dcloud.io/collocation/pages)


`uni.scss`这里是uni-app内置的常用样式变量
#  开发规范


> 为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：



- 页面文件遵循[Vue单文件组件规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，[详见uni-app组件规范](https://uniapp.dcloud.io/component/README)
- 接口能力（JS API）靠近微信小程序规范，但需要前缀wx替换为uni，[详见uni-app接口规范](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理同`vue.js`规范，同时补充了APP及[页面的生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle)
- 为兼容多端运行，建议使用flex布局进行开发
# 项目全局配置
pages.json
```
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/message/message",
			"style": {
				"navigationBarTitleText": "实时资讯",
				"navigationBarBackgroundColor": "#00B2EE",
				"h5": {
					"pullToRefresh": {
						"color": "#7D26CD"
					}
				}
			}
		},
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "Hello Lemon"
			}
		}, {
			"path": "pages/user/user",
			"style": {
				// "navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		}, {
			"path": "pages/detail/detail",
			"style": {
				"navigationBarTitleText": "详情",
				"enablePullDownRefresh": false
			}
		}
	],
	"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#63B8FF",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"list": [{
				"pagePath": "pages/message/message",
				"iconPath": "static/image/tabbar/grid.png",
				"selectedIconPath": "static/image/tabbar/grid_active.png",
				"text": "新闻"
			}, {
				"pagePath": "pages/index/index",
				"iconPath": "static/image/tabbar/list.png",
				"selectedIconPath": "static/image/tabbar/list_active.png",
				"text": "首页"
			},
			{
				"pagePath": "pages/user/user",
				"iconPath": "static/image/tabbar/me.png",
				"selectedIconPath": "./static/image/tabbar/me_active.png",
				"text": "我"
			}
		]
	},
	"globalStyle": {
		"navigationBarTextStyle": "white",
		"navigationBarTitleText": "Hello",
		"navigationBarBackgroundColor": "#228B22",
		"backgroundColor": "#3CB371",
		"enablePullDownRefresh": true,
		"backgroundTextStyle": "light"
	},
	"condition": {
		"current": 0,
		"list": [{
			"name": "详情页",
			"path": "pages/detail/detail",
			"query": "id=80"
		}]
	}
}
```
完成页面骨架，创建如下目录及文件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642665008860-3b9773d9-91af-4172-82d3-e86363270346.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=256&id=u3e7e688c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=256&originWidth=197&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7334&status=done&style=none&taskId=u2b845f16-3c4d-478c-b34d-5e232b3557d&title=&width=197)
然后运行在内置浏览器如下：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642665073813-848cc7e5-ccb9-4806-8903-11b0e2ec3656.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=667&id=uccf1f294&margin=%5Bobject%20Object%5D&name=image.png&originHeight=667&originWidth=375&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7416&status=done&style=none&taskId=u51cf4da5-86c2-4cf7-bbb6-b1fd86ed945&title=&width=375)
初次运行在微信小程序模拟器时需要做简单的配置：

- 在微信小程序开发者工具中，进入设置->安全设置，打开服务端口。
- 在Hbuilder中需要进入工具菜单->设置，点击运行配置，找到小程序配置，添加你的微信开发者工具安装路径，（形如：D:/Program File/xxx/微信web开发者工具），然后运行在小程序模拟器即可。
# 使用字体图标
在iconfont下载字体图标文件包放于项目static目录，如下：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642665502825-2ac8001a-a426-4d26-b2ff-e97e240365dc.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=300&id=ua08a05e1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=300&originWidth=216&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7686&status=done&style=none&taskId=u3bb6a42a-5a23-437e-8ddc-e62bdc35bac&title=&width=216)
此时使用图标，直接运行会报错：
ModuleNotFoundError: Module not found: Error: Can't resolve './iconfont.ttf?t=1642659690020'
解决：需要修改字体图标引入路径如下
```
// static/fonts/iconfonts.css
@font-face {
  font-family: "iconfont"; /* Project id 1498941 */
  src: url('~@/static/fonts/iconfont.woff2?t=1642659690020') format('woff2'),
       url('~@/static/fonts/iconfont.woff?t=1642659690020') format('woff'),
       url('~@/static/fonts/iconfont.ttf?t=1642659690020') format('truetype');
}
```
# 引入scss插件
需要安装scss/sass编译插件。如果HbuilderX自动安装成功的话，那么恭喜你，不需要看后面的安装方法了。
HbuilderX中安装总是安装失败的话，建议下载zip包手动加到plugins，[参考官方介绍](https://ext.dcloud.net.cn/plugin?name=compile-node-sass)。
下面介绍我的安装踩坑历程：
下载插件ZIP，解压将文件夹放到Hbuilder安装目录下的plugins目录，然后重启HbuilderX运行项目，报错：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642666170261-0b5fa09e-8fde-44cc-bcd3-5695104647ca.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=327&id=u665a2109&margin=%5Bobject%20Object%5D&name=image.png&originHeight=327&originWidth=844&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68047&status=done&style=none&taskId=u0a0961c7-e7bb-4912-8a89-48e5d8a9698&title=&width=844)
执行日志提供的三条指令后启动依然报错。
然后，根据提示手动下载缺失文件win32-ia32-72_binding.node，[下载binding.node](https://github.com/sass/node-sass/releases)
根据提示在D:\install\HBuilderX.3.3.5.20211229\HBuilderX\plugins\compile-node-sass\node_modules\node-sass-china\vendor中创建win32-ia32-72目录，将下载的.node文件改名为binding.node并放到该目录，最后重启运行scss编译成功。
# 生命周期
## 应用的生命周期
| **函数名** | **说明** |
| --- | --- |
| onLaunch | 当uni-app 初始化完成时触发（全局只触发一次） |
| onShow | 当 uni-app 启动，或从后台进入前台显示 |
| onHide | 当 uni-app 从前台进入后台 |
| onError | 当 uni-app 报错时触发 |
| onUniNViewMessage | 对 nvue 页面发送的数据进行监听，可参考 [nvue 向 vue 通讯](https://uniapp.dcloud.io/nvue-api?id=communication) |
| onUnhandledRejection | 对未处理的 Promise 拒绝事件监听函数（2.8.1+） |
| onPageNotFound | 页面不存在监听函数 |
| onThemeChange | 监听系统主题变化 |

## 页面的生命周期
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642667840084-2cfb1e98-691d-48f2-9fb4-8461db56fb91.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=257&id=u9d447eed&margin=%5Bobject%20Object%5D&name=image.png&originHeight=257&originWidth=687&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73172&status=done&style=none&taskId=u53f9f17b-feb5-4283-bc48-dfa94b55381&title=&width=687)
onLoad\onReady不会多次触发，onShow、onHide会多次触发。
[了解更多...](https://uniapp.dcloud.io/collocation/frame/lifecycle)
​

# 异步请求
[接口文档](https://www.showdoc.com.cn/128719739414963?page_id=2513235043485226)
# 条件注释
因每个平台有自己的一些特性，因此会存在一些无法跨平台的情况。

- 大量写 if else，会造成代码执行性能低下和管理混乱。
- 编译到不同的工程后二次修改，会让后续升级变的很麻烦。

**支持的文件**

- .vue
- .js
- .css
- pages.json
- 各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug

**注意：**

- 条件编译是利用注释实现的，在不同语法里注释写法不一样，js使用 // 注释、css 使用 /* 注释 */、vue/nvue 模板里使用 <!-- 注释 -->；
- 条件编译APP-PLUS包含APP-NVUE和APP-VUE，APP-PLUS-NVUE和APP-NVUE没什么区别，为了简写后面出了APP-NVUE ；
- 使用条件编译请保证编译前和编译后文件的正确性，比如json文件中不能有多余的逗号；
- VUE3 需要在项目的 manifest.json 文件根节点配置 "vueVersion" : "3"

**模板文件中的条件编译：**
![1642729985(1).png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642729993896-b3377cd2-0408-4417-9a3c-c7930b4f3243.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=142&id=uadfb6842&margin=%5Bobject%20Object%5D&name=1642729985%281%29.png&originHeight=142&originWidth=350&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6244&status=done&style=none&taskId=u83899094-6662-4947-81e4-3e166ab3bb3&title=&width=350)
**JS中的条件编译：**
> 除了支持单个平台的条件编译外，还支持**多平台**同时编译，使用 || 来分隔平台名称。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642730355601-b50517e3-e889-481c-96a8-35380a3827e5.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=177&id=u2c4d70d4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=177&originWidth=390&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10400&status=done&style=none&taskId=u62932b4a-d71e-4a89-b4c5-faad9f1a66d&title=&width=390)
**CSS中的条件编译：**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642730468693-3cd0b6f8-572e-4e3b-ad5c-62796f95968e.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=184&id=ud59b414f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=314&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7454&status=done&style=none&taskId=uee47774e-a65e-4ab0-a96f-10f8c0ce843&title=&width=314)
**pages.json 的条件编译:**
只有运行至 App 时才会编译进去。
![](https://cdn.nlark.com/yuque/0/2022/png/638436/1642729933151-3978cddf-76a2-443f-a3aa-bda16f2855ce.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u1b893c71&margin=%5Bobject%20Object%5D&originHeight=191&originWidth=433&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u50d67813-4ce2-44c0-87fd-16bcaaaf1cc&title=)


> - Android 和 iOS 平台不支持通过条件编译来区分，如果需要区分 Android、iOS 平台，请通过调用 uni.getSystemInfo 来获取平台信息。支持ifios、ifAndroid代码块，可方便编写判断。
> - 有些跨端工具可以提供js的条件编译或多态，但这对于实际开发远远不够。uni-app不止是处理js，任何代码都可以多端条件编译，才能真正解决实际项目的跨端问题。另外所谓多态在实际开发中会造成大量冗余代码，很不利于复用和维护。举例，微信小程序主题色是绿色，而百度支付宝小程序是蓝色，你的应用想分平台适配颜色，只有条件编译是代码量最低、最容易维护的。
> - 有些公司的产品运营总是给不同平台提不同需求，但这不是拒绝uni-app的理由。关键在于项目里，复用的代码多还是个性的代码多，正常都是复用的代码多，所以仍然应该多端。而个性的代码放到不同平台的目录下，差异化维护。

[更多...](https://uniapp.dcloud.io/platform)
​

# 导航
### 声明式导航
> `navigator`可直接跳转至普通页面（非TabBar页面），若跳转至TabBar页面需添加属性值`open-type="switchTab"`

```vue
<navigator url="../detail/detail?id=6&name=lemon" >跳转至详情页Switch</navigator>
<navigator url="../message/message" open-type="switchTab">跳转至TabBar中的新闻页-></navigator>
<navigator url="../detail/detail" open-type="redirect">跳转至详情页Redirect-></navigator>
```
### 编程式导航：
> `navigateTo`可直接跳转至普通页面（非TabBar页面），若跳转至TabBar页面需用`switchTab`。

```javascript
toDetailPage(){
	uni.navigateTo({
		url:'../detail/detail?id=6&name=lemon'
	})
},
toNewsPage(){
	uni.switchTab({
		url:'../message/message'
	})
},
redirectToDetailPage(){
	// 关闭当前页面，跳转到应用内的某个页面。
	uni.redirectTo({
		url:'../detail/detail'
	})
}
```
### 获取上一页URL传入的数据：
列表页（上一页）：
```vue
<navigator url="../detail/detail?id=6&name=lemon" >
  跳转至详情页Switch
</navigator>
```
详情页（下一页）：
```vue
// 获取上一页传入的数据
onLoad(options) {
  console.log(options) //{id: "6", name: "lemon"}
},
```
# 创建组件
# 组件间通讯
父传子：通过props
子传父：$emit
兄弟组件传值：uni.$on和uni.$emit
[更多内容...](https://uniapp.dcloud.io/api/window/communication)
​

# 扩展组件应用
例如：[日历组件uni-calendar](https://uniapp.dcloud.io/component/uniui/uni-calendar)
进入[下载&导入组件](https://ext.dcloud.net.cn/plugin?name=uni-calendar)页面，点击使用HbuilderX导入组件。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/638436/1642736394589-096cd101-74f2-4bc1-b6c9-37f5bcce9a9e.png#clientId=u10ecfaaa-4c77-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=397&id=ub4bf2c1b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=397&originWidth=516&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14291&status=done&style=none&taskId=ub9ad47f3-0246-45e1-87cb-ec8d38f36d1&title=&width=516)
导入成功，即可使用。
​

