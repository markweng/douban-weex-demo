// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/wengcheng/Desktop/weex/first-project/src/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1c23b3e4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "cellcontent": {
	    "flexDirection": "row"
	  },
	  "textcontent": {
	    "marginTop": 30,
	    "marginLeft": 0,
	    "marginRight": 30,
	    "flexWrap": "wrap"
	  },
	  "titletext": {
	    "fontSize": 28,
	    "color": "#000000",
	    "textAlign": "left"
	  },
	  "contentText": {
	    "fontSize": 28,
	    "color": "#000000",
	    "textAlign": "center"
	  },
	  "textdtl": {
	    "fontSize": 20,
	    "color": "#999999",
	    "textAlign": "left",
	    "paddingTop": 5,
	    "paddingRight": 5,
	    "paddingBottom": 5,
	    "paddingLeft": 5
	  },
	  "imagebox": {
	    "marginTop": 30,
	    "marginRight": 30,
	    "marginBottom": 30,
	    "marginLeft": 30
	  },
	  "image": {
	    "width": 162,
	    "height": 240,
	    "backgroundColor": "#afddff"
	  },
	  "buy": {
	    "justifyContent": "center",
	    "right": 30,
	    "width": 150,
	    "marginTop": 30
	  },
	  "contentbuy": {
	    "backgroundColor": "#FF0000",
	    "width": 150,
	    "borderRadius": 10
	  },
	  "textbuy": {
	    "fontSize": 20,
	    "color": "#FFFFFF",
	    "textAlign": "center",
	    "paddingTop": 5,
	    "paddingRight": 5,
	    "paddingBottom": 5,
	    "paddingLeft": 5
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');
	var globalEvent = weex.requireModule('globalEvent');
	var apiHost = "http://api.douban.com/v2/movie/top250";
	exports.default = {
	    data: function data() {
	        return {
	            header_text: "hahahhahahh",
	            lists: []
	        };
	    },

	    methods: {
	        getData: function getData(callback) {
	            return stream.fetch({
	                method: 'GET',
	                type: 'jsonp',
	                url: apiHost
	            }, callback);
	        },
	        getAllData: function getAllData() {
	            var _this = this;

	            this.getData(function (res) {

	                _this.header_text = res.data.title, _this.lists = res.data.subjects;
	            });
	        }
	    },
	    created: function created() {
	        this.getAllData();
	    },
	    mounted: function mounted() {},

	    components: {}

	};
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    staticClass: ["contentText"]
	  }, [_vm._v(_vm._s(_vm.header_text))]), _c('list', {
	    staticClass: ["list"],
	    attrs: {
	      "loadmoreoffset": "10"
	    },
	    on: {
	      "loadmore": _vm.fetch
	    }
	  }, _vm._l((_vm.lists), function(model) {
	    return _c('cell', {
	      staticClass: ["cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["cellcontent"]
	    }, [_c('div', {
	      staticClass: ["imagebox"]
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "src": model.images.medium
	      }
	    })]), _c('div', {
	      staticClass: ["textcontent"]
	    }, [_c('text', {
	      staticClass: ["titletext"]
	    }, [_vm._v(_vm._s(model.title))]), _c('text', {
	      staticClass: ["textdtl"]
	    }, [_vm._v("评分：" + _vm._s(model.rating.average))]), _c('text', {
	      staticClass: ["textdtl"]
	    }, [_vm._v("导演：" + _vm._s(model.directors[0].name))]), _c('text', {
	      staticClass: ["textdtl"]
	    }, [_vm._v("主演：" + _vm._s(model.casts[0].name) + " / " + _vm._s(model.casts[1].name))])]), _c('div', {
	      staticClass: ["buy"]
	    }, [_c('div', {
	      staticClass: ["contentbuy"]
	    }, [_c('text', {
	      staticClass: ["textbuy"]
	    }, [_vm._v(_vm._s(parseInt(model.collect_count / 10000)) + "万人看过")]), _c('text', {
	      staticClass: ["textbuy"]
	    }, [_vm._v("购买")])])])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);