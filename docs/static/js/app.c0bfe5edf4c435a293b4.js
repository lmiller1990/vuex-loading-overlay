webpackJsonp([1],{NHnr:function(t,e,a){"use strict";function n(t){a("gu2T")}function s(t){a("mPif")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),i={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0,!1,!1),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1,!1,!1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],u={render:o,staticRenderFns:l},c=u,_=a("VU/8"),v=n,p=_(i,c,!1,v,"data-v-4241e014",null),f=(p.exports,{name:"app",created:function(){this.$store.dispatch("firstCall",{isAjax:!0}),this.$store.dispatch("secondCall",{isAjax:!0}),this.$store.dispatch("thirdCall",{isAjax:!0})},computed:{width:function(){return{width:100-100/(this.$store.getters.total/this.$store.getters.pendingCalls)+"vw"}},opacity:function(){return{opacity:0===this.$store.getters.pendingCalls?"0":"1","transition-delay":"1.5s","transition-duration":"1s"}}}}),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"loading-bar",style:t.opacity},[a("div",{staticClass:"progress",style:t.width})]),t._v(" "),t._l(Object.keys(t.$store.state.ajaxCalls),function(e){return a("div",{key:e.type},[a("div",[t._v("\n      "+t._s(t.$store.state.ajaxCalls[e])+"\n    ")])])}),t._v(" "),a("br"),t._v("\n  Progress: "+t._s(t.$store.getters.pendingCalls)+" / "+t._s(t.$store.getters.total)+"\n")],2)},d=[],h={render:C,staticRenderFns:d},g=h,m=a("VU/8"),S=s,j=m(f,g,!1,S,null,null),b=j.exports,E=a("fZjL"),y=a.n(E),x=a("bOdI"),T=a.n(x),A=a("Dd8w"),k=a.n(A),L=a("NYxO"),$=a("NRb0"),w=a.n($),N=function(t){t.subscribe(function(e,a){if(e.type.includes("SUCCESS")){var n=w()(e.type.substring(0,e.type.indexOf("SUCCESS")-1));t.commit("SET_PENDING",{type:n,pending:!1})}}),t.subscribeAction(function(e){e.payload&&!0===e.payload.isAjax&&t.commit("SET_ACTION",{action:e})})};r.a.use(L.a);var U={ajaxCalls:{}},D={SET_ACTION:function(t,e){var a=e.action;t.ajaxCalls=k()({},t.ajaxCalls,T()({},a.type,k()({},a,{pending:!0})))},SET_PENDING:function(t,e){var a=e.type;e.pending;t.ajaxCalls[a].pending=!1},FIRST_CALL_SUCCESS:function(t){},SECOND_CALL_SUCCESS:function(t){},THIRD_CALL_SUCCESS:function(t){}},I={firstCall:function(t){var e=t.commit;setTimeout(function(){e("FIRST_CALL_SUCCESS")},1e3)},secondCall:function(t){var e=t.commit;setTimeout(function(){e("SECOND_CALL_SUCCESS")},2500)},thirdCall:function(t){var e=t.commit;setTimeout(function(){e("THIRD_CALL_SUCCESS")},4e3)}},O={pendingCalls:function(t){return y()(t.ajaxCalls).filter(function(e){return!0===t.ajaxCalls[e].pending}).length},total:function(t){return y()(t.ajaxCalls).length}},R=new L.a.Store({strict:!0,state:U,mutations:D,actions:I,getters:O,plugins:[N]}),P=R;r.a.config.productionTip=!1,new r.a({el:"#app",store:P,template:"<App/>",components:{App:b}})},gu2T:function(t,e){},mPif:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c0bfe5edf4c435a293b4.js.map