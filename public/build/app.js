(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/vuetify */ "./assets/plugins/vuetify.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_Login_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Login.vue */ "./assets/components/Login.vue");
/* harmony import */ var _components_UserTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserTable.vue */ "./assets/components/UserTable.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application






vue__WEBPACK_IMPORTED_MODULE_5__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_6__["default"]);
var routes = [{
  path: '/',
  component: _components_Login_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'login'
}, {
  path: '/table',
  component: _components_UserTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'table'
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_6__["default"]({
  mode: 'history',
  routes: routes
});
new vue__WEBPACK_IMPORTED_MODULE_5__["default"]({
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_2__["default"],
  router: router
}).$mount('#app');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/plugins/vuetify.js":
/*!***********************************!*\
  !*** ./assets/plugins/vuetify.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");



vue__WEBPACK_IMPORTED_MODULE_1__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_2___default()));
var opts = {
  theme: {
    themes: {
      light: {
        primary: '#1565c0',
        secondary: '#64b5f6',
        accent: '#78002e',
        error: '#d50000'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new (vuetify__WEBPACK_IMPORTED_MODULE_2___default())(opts));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Login',
  data: function data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      authUser: []
    };
  },
  methods: {
    AuthMethod: function AuthMethod() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/login', this.loginData).then(function (response) {
        return _this.authUser = response.data;
      })["catch"](function (error) {
        return console.log(error.data);
      });
      console.log(this.authUser);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/UserTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/UserTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserTable',
  data: function data() {
    return {
      headers: [{
        text: 'Пользователь',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Имя',
        value: 'name'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Дата рождения',
        value: 'birthday'
      }],
      users: []
    };
  },
  mounted: function mounted() {
    var _this = this;
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/users', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(function (response) {
      return _this.users = response.data;
    })["catch"](function (error) {
      return console.log(error.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Login.vue?vue&type=template&id=54d11a04&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Login.vue?vue&type=template&id=54d11a04& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-app", {
    attrs: {
      id: "inspire"
    }
  }, [_c("v-content", [_c("v-container", {
    attrs: {
      fluid: "",
      "fill-height": ""
    }
  }, [_c("v-layout", {
    attrs: {
      "align-center": "",
      "justify-center": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm8: "",
      md4: ""
    }
  }, [_c("v-card", {
    staticClass: "elevation-12"
  }, [_c("v-toolbar", {
    attrs: {
      dark: "",
      color: "primary"
    }
  }, [_c("v-toolbar-title", [_vm._v("Форма авторизации")])], 1), _vm._v(" "), _c("v-card-text", [_c("v-form", [_c("v-text-field", {
    attrs: {
      name: "login",
      label: "Login",
      type: "text"
    },
    model: {
      value: _vm.loginData.username,
      callback: function callback($$v) {
        _vm.$set(_vm.loginData, "username", $$v);
      },
      expression: "loginData.username"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      id: "password",
      name: "password",
      label: "Password",
      type: "password"
    },
    model: {
      value: _vm.loginData.password,
      callback: function callback($$v) {
        _vm.$set(_vm.loginData, "password", $$v);
      },
      expression: "loginData.password"
    }
  })], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.AuthMethod(_vm.loginData);
      }
    }
  }, [_vm._v("Login")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/UserTable.vue?vue&type=template&id=33437250&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/UserTable.vue?vue&type=template&id=33437250&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-app", {
    attrs: {
      id: "inspire"
    }
  }, [_c("v-content", [_c("v-container", {
    attrs: {
      fluid: "",
      "fill-height": ""
    }
  }, [_c("v-layout", {
    attrs: {
      "align-center": "",
      "justify-center": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm8: "",
      md10: ""
    }
  }, [_c("h1", [_vm._v("Таблица пользователей")]), _vm._v(" "), _c("v-data-table", {
    staticClass: "elevation-12",
    attrs: {
      headers: _vm.headers,
      items: _vm.users,
      "items-per-page": 5
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/components/Login.vue":
/*!*************************************!*\
  !*** ./assets/components/Login.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_54d11a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=54d11a04& */ "./assets/components/Login.vue?vue&type=template&id=54d11a04&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./assets/components/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_54d11a04___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_54d11a04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/UserTable.vue":
/*!*****************************************!*\
  !*** ./assets/components/UserTable.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserTable_vue_vue_type_template_id_33437250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTable.vue?vue&type=template&id=33437250&scoped=true& */ "./assets/components/UserTable.vue?vue&type=template&id=33437250&scoped=true&");
/* harmony import */ var _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTable.vue?vue&type=script&lang=js& */ "./assets/components/UserTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserTable_vue_vue_type_template_id_33437250_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserTable_vue_vue_type_template_id_33437250_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33437250",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/UserTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./assets/components/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/components/UserTable.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./assets/components/UserTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/UserTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/components/Login.vue?vue&type=template&id=54d11a04&":
/*!********************************************************************!*\
  !*** ./assets/components/Login.vue?vue&type=template&id=54d11a04& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_54d11a04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_54d11a04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_54d11a04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=54d11a04& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/Login.vue?vue&type=template&id=54d11a04&");


/***/ }),

/***/ "./assets/components/UserTable.vue?vue&type=template&id=33437250&scoped=true&":
/*!************************************************************************************!*\
  !*** ./assets/components/UserTable.vue?vue&type=template&id=33437250&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_33437250_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_33437250_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_33437250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTable.vue?vue&type=template&id=33437250&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/UserTable.vue?vue&type=template&id=33437250&scoped=true&");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_da-6a1086"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGx1Z2lucy92dWV0aWZ5LmpzIiwid2VicGFjazovLy9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9jb21wb25lbnRzL1VzZXJUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1VzZXJUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzlkNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9naW4udnVlP2JhNDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvVXNlclRhYmxlLnZ1ZT85MjhkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvZ2luLnZ1ZT9iMmNlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1VzZXJUYWJsZS52dWU/ZWM5ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Mb2dpbi52dWU/ZGFkOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Vc2VyVGFibGUudnVlPzc3OWEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgdnVldGlmeSBmcm9tICcuL3BsdWdpbnMvdnVldGlmeSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5cbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4udnVlJ1xuaW1wb3J0IFVzZXJUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvVXNlclRhYmxlLnZ1ZSdcblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBMb2dpbiwgbmFtZTogJ2xvZ2luJ30sXG4gICAge3BhdGg6ICcvdGFibGUnLCBjb21wb25lbnQ6IFVzZXJUYWJsZSwgbmFtZTogJ3RhYmxlJ31cbl1cblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgbW9kZTogJ2hpc3RvcnknLFxuICAgIHJvdXRlc1xufSlcblxubmV3IFZ1ZSh7XG4gICAgdnVldGlmeSxcbiAgICByb3V0ZXJcbn0pLiRtb3VudCgnI2FwcCcpXG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVldGlmeSBmcm9tICd2dWV0aWZ5J1xuaW1wb3J0ICd2dWV0aWZ5L2Rpc3QvdnVldGlmeS5taW4uY3NzJ1xuXG5WdWUudXNlKFZ1ZXRpZnkpXG5cbmNvbnN0IG9wdHMgPSB7XG4gICAgdGhlbWU6IHtcbiAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICBsaWdodDoge1xuICAgICAgICAgICAgICAgIHByaW1hcnk6ICcjMTU2NWMwJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6ICcjNjRiNWY2JyxcbiAgICAgICAgICAgICAgICBhY2NlbnQ6ICcjNzgwMDJlJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJyNkNTAwMDAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXRpZnkob3B0cykiLCI8dGVtcGxhdGU+XG4gIDx2LWFwcCBpZD1cImluc3BpcmVcIj5cbiAgICA8di1jb250ZW50PlxuICAgICAgPHYtY29udGFpbmVyIGZsdWlkIGZpbGwtaGVpZ2h0PlxuICAgICAgICA8di1sYXlvdXQgYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyPlxuICAgICAgICAgIDx2LWZsZXggeHMxMiBzbTggbWQ0PlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImVsZXZhdGlvbi0xMlwiPlxuICAgICAgICAgICAgICA8di10b29sYmFyIGRhcmsgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT7QpNC+0YDQvNCwINCw0LLRgtC+0YDQuNC30LDRhtC40Lg8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1mb3JtPlxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJsb2dpbkRhdGEudXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibG9naW5EYXRhLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3YtZm9ybT5cbiAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiB2LW9uOmNsaWNrPVwiQXV0aE1ldGhvZChsb2dpbkRhdGEpXCI+TG9naW48L3YtYnRuPlxuICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtY29udGFpbmVyPlxuICAgIDwvdi1jb250ZW50PlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0xvZ2luJyxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dpbkRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICB9LFxuICAgICAgYXV0aFVzZXI6IFtdXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBBdXRoTWV0aG9kICgpIHtcblxuICAgICAgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIHRoaXMubG9naW5EYXRhKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMuYXV0aFVzZXIgPSByZXNwb25zZS5kYXRhKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5kYXRhKSlcblxuICAgICAgY29uc29sZS5sb2codGhpcy5hdXRoVXNlcik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwIGlkPVwiaW5zcGlyZVwiPlxuICAgIDx2LWNvbnRlbnQ+XG4gICAgICA8di1jb250YWluZXIgZmx1aWQgZmlsbC1oZWlnaHQ+XG4gICAgICAgIDx2LWxheW91dCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXI+XG4gICAgICAgICAgPHYtZmxleCB4czEyIHNtOCBtZDEwPlxuICAgICAgICAgICAgPGgxPtCi0LDQsdC70LjRhtCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5PC9oMT5cbiAgICAgICAgICAgIDx2LWRhdGEtdGFibGVcbiAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgICAgICAgICAgIDppdGVtcz1cInVzZXJzXCJcbiAgICAgICAgICAgICAgICA6aXRlbXMtcGVyLXBhZ2U9XCI1XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVsZXZhdGlvbi0xMlwiXG4gICAgICAgICAgICA+PC92LWRhdGEtdGFibGU+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtY29udGFpbmVyPlxuICAgIDwvdi1jb250ZW50PlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIG5hbWU6ICdVc2VyVGFibGUnLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YwnLFxuICAgICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogJ25hbWUnLFxuICAgICAgICB9LFxuICAgICAgICB7dGV4dDogJ9CY0LzRjycsIHZhbHVlOiAnbmFtZSd9LFxuICAgICAgICB7dGV4dDogJ0VtYWlsJywgdmFsdWU6ICdlbWFpbCd9LFxuICAgICAgICB7dGV4dDogJ9CU0LDRgtCwINGA0L7QttC00LXQvdC40Y8nLCB2YWx1ZTogJ2JpcnRoZGF5J30sXG4gICAgICBdLFxuICAgICAgdXNlcnM6IFtdLFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIGF4aW9zLmdldCgnL2FwaS91c2VycycsIHtoZWFkZXJzOiB7J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ319KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLnVzZXJzID0gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLmRhdGEpKVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaW5zcGlyZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRlbnRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiwgXCJmaWxsLWhlaWdodFwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJhbGlnbi1jZW50ZXJcIjogXCJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBzbTg6IFwiXCIsIG1kNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkYXJrOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0KTQvtGA0LzQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG9naW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmxvZ2luRGF0YSwgXCJ1c2VybmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9naW5EYXRhLnVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2dpbkRhdGEucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmxvZ2luRGF0YSwgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9naW5EYXRhLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uQXV0aE1ldGhvZChfdm0ubG9naW5EYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTG9naW5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hcHBcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImluc3BpcmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250ZW50XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIsIFwiZmlsbC1oZWlnaHRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiYWxpZ24tY2VudGVyXCI6IFwiXCIsIFwianVzdGlmeS1jZW50ZXJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgc204OiBcIlwiLCBtZDEwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcItCi0LDQsdC70LjRhtCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1zLXBlci1wYWdlXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTRkMTFhMDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL25vc2VrcHQvYXV0aC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NGQxMWEwNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NGQxMWEwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NGQxMWEwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0ZDExYTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0ZDExYTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0MzcyNTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlclRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzM0MzcyNTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ub3Nla3B0L2F1dGgvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzM0MzcyNTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzM0MzcyNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzM0MzcyNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0MzcyNTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzM0MzcyNTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9jb21wb25lbnRzL1VzZXJUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTRkMTFhMDQmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0MzcyNTAmc2NvcGVkPXRydWUmXCIiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJWdWUiLCJ2dWV0aWZ5IiwiVnVlUm91dGVyIiwiTG9naW4iLCJVc2VyVGFibGUiLCJ1c2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwibmFtZSIsInJvdXRlciIsIm1vZGUiLCIkbW91bnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJWdWV0aWZ5Iiwib3B0cyIsInRoZW1lIiwidGhlbWVzIiwibGlnaHQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiYWNjZW50IiwiZXJyb3IiLCJheGlvcyIsImRhdGEiLCJsb2dpbkRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXV0aFVzZXIiLCJtZXRob2RzIiwiQXV0aE1ldGhvZCIsIl90aGlzIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwidGV4dCIsImFsaWduIiwic29ydGFibGUiLCJ1c2VycyIsIm1vdW50ZWQiLCJnZXQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJpZCIsImZsdWlkIiwieHMxMiIsInNtOCIsIm1kNCIsInN0YXRpY0NsYXNzIiwiZGFyayIsImNvbG9yIiwiX3YiLCJsYWJlbCIsInR5cGUiLCJtb2RlbCIsImNhbGxiYWNrIiwiJCR2IiwiJHNldCIsImV4cHJlc3Npb24iLCJvbiIsImNsaWNrIiwiJGV2ZW50Iiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsIm1kMTAiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=