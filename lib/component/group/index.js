!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=26)}({0:function(e,t){e.exports=function(e,t,r,o,n){var u,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(u=e,a=e.default);var d="function"==typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),o&&(d._scopeId=o);var i;if(n?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=i):r&&(i=r),i){var p=d.functional,f=p?d.render:d.beforeCreate;p?d.render=function(e,t){return i.call(t),f(e,t)}:d.beforeCreate=f?[].concat(f,i):[i]}return{esModule:u,exports:a,options:d}}},26:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(27);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}}),r(30)},27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(28),n=r.n(o),u=r(29),a=r(0),s=a(n.a,u.a,null,null,null);s.options.__file="packages\\group\\src\\group.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] group.vue: functional components are not supported with templates, they should use render functions."),t.default=s.exports},28:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ma-group",props:{component:{type:String,default:"div"},header:{type:String,default:"aa"},footer:{type:String,default:""},noPadded:{type:Boolean,default:!1}}}},29:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ma-group"},[e.header?r("header",{staticClass:"ma-group-header"},[e._v(e._s(e.header))]):e._e(),r("div",{staticClass:"ma-group-body"},[e._t("default")],2)])},n=[];o._withStripped=!0;var u={render:o,staticRenderFns:n};t.a=u},30:function(e,t){e.exports={"ma-group":"ma-group","ma-list":"ma-list","ma-group-body":"ma-group-body","ma-group-no-padded":"ma-group-no-padded","ma-group-header":"ma-group-header","ma-group-footer":"ma-group-footer"}}}));