(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods","components-goods-list-goods-list"],{"0945":function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("2909"));n("96cf");var i=r(n("1da1")),a=r(n("5d9f")),c={components:{GoodsList:a.default},data:function(){return{goods:[],pageIndex:1,noData:!1}},onLoad:function(){this.getHotGoods()},onReachBottom:function(){this.goods.length<10*this.pageIndex||(this.noData=!0,t("log","bottom"," at pages/goods/goods.vue:26"),this.pageIndex+=1e3,this.getHotGoods())},onPullDownRefresh:function(){var t=this;this.pageIndex=1,this.goods=[],this.noData=!1,setTimeout((function(){t.getHotGoods((function(){uni.stopPullDownRefresh()}))}),500)},methods:{getHotGoods:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$request({url:"/shop/goods/list?pagenum=".concat(e.pageIndex,"&pagesize=10")});case 2:r=n.sent,e.goods=[].concat((0,o.default)(e.goods),(0,o.default)(r.goods)),t&&t();case 5:case"end":return n.stop()}}),n)})))()},goGoodsDetail:function(e){t("log",e," at pages/goods/goods.vue:52"),uni.navigateTo({url:"/pages/goods/detail?id=".concat(e)})}}};e.default=c}).call(this,n("0de9")["log"])},"14e9":function(t,e,n){"use strict";n.r(e);var r=n("5999"),o=n("3d8d");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("3d9e");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"77cd3328",null,!1,r["a"],a);e["default"]=u.exports},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=c(n("6005")),o=c(n("db90")),i=c(n("06c5")),a=c(n("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,r.default)(t)||(0,o.default)(t)||(0,i.default)(t)||(0,a.default)()}},"2c0d":function(t,e,n){"use strict";n.r(e);var r=n("b009"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},3427:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"3d8d":function(t,e,n){"use strict";n.r(e);var r=n("0945"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"3d9e":function(t,e,n){"use strict";var r=n("fba1"),o=n.n(r);o.a},"440b":function(t,e,n){"use strict";var r=n("d9ed"),o=n.n(r);o.a},5999:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={goodsList:n("5d9f").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"goods"},[n("goods-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail.apply(void 0,arguments)}}}),t.noData?n("v-uni-view",{staticClass:"data-over"},[t._v("-------我是有底线的-------")]):t._e()],1)},i=[]},"5d9f":function(t,e,n){"use strict";n.r(e);var r=n("bd29"),o=n("2c0d");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("440b");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"0a072c8a",null,!1,r["a"],a);e["default"]=u.exports},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=o(n("6b75"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t))return(0,r.default)(t)}},6763:function(t,e,n){t.exports=n.p+"static/img/goods.543f33ce.jpg"},"703d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods[data-v-0a072c8a]{padding:0 %?15?%;display:flex;flex-wrap:wrap;justify-content:space-between}.goods .goods-item[data-v-0a072c8a]{width:%?355?%;margin:%?10?% 0;padding:%?15?%;box-sizing:border-box;background-color:#fff}.goods .goods-item uni-image[data-v-0a072c8a]{width:80%;height:150px;display:block;margin:0 auto}.goods .goods-item .price[data-v-0a072c8a]{margin:%?20?% 0 %?5?% 0;color:#cd3333;font-size:%?36?%}.goods .goods-item .price uni-text[data-v-0a072c8a]:nth-child(2){margin-left:%?17?%;font-size:%?28?%;color:#ccc;text-decoration:line-through}.goods .goods-item .name[data-v-0a072c8a]{font-size:%?28?%;line-height:%?50?%;padding:%?10?% 0 %?15?% 0}',""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,d=e.regeneratorRuntime;if(d)s&&(t.exports=d);else{d=e.regeneratorRuntime=s?t.exports:{},d.wrap=b;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",g={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(T([])));m&&m!==r&&o.call(m,a)&&(v=m);var w=E.prototype=_.prototype=Object.create(v);L.prototype=w.constructor=E,E.constructor=L,E[u]=L.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},d.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[c]=function(){return this},d.AsyncIterator=O,d.async=function(t,e,n,r){var o=new O(b(t,e,n,r));return d.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function b(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=k(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function L(){}function E(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(n,r,i,a){var c=x(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function k(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return A()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?p:l,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b009:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("6763"),o={name:"GoodsList",props:["goods"],data:function(){return{customImg:r}},methods:{navigator:function(t){this.$emit("goodsItemClick",t)}}};e.default=o},b4ed:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods[data-v-77cd3328]{background-color:#eee}.data-over[data-v-77cd3328]{width:100%;height:50px;line-height:50px;text-align:center;font-size:%?28?%}',""]),t.exports=e},bd29:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"goods"},t._l(t.goods,(function(e,r){return n("v-uni-view",{key:e.goods_id,staticClass:"goods-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigator(e.goods_id)}}},[n("v-uni-image",{attrs:{src:e.goods_big_logo||t.customImg,mode:""}}),n("v-uni-view",{staticClass:"price"},[n("v-uni-text",[t._v("￥"+t._s(e.goods_price))]),n("v-uni-text",[t._v("￥2998")])],1),n("v-uni-text",{staticClass:"name"},[t._v(t._s(e.goods_name))])],1)})),1)},i=[]},d9ed:function(t,e,n){var r=n("703d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("0bcbbf76",r,!0,{sourceMap:!1,shadowMode:!1})},db90:function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},fba1:function(t,e,n){var r=n("b4ed");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("2cd1ca30",r,!0,{sourceMap:!1,shadowMode:!1})}}]);